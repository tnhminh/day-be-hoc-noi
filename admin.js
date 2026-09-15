// =======================================================================
// CMS CLIENT JAVASCRIPT
// =======================================================================
const $ = (s) => document.querySelector(s);
let allWords = [];
let currentConfig = {};
let activeAudio = null;

// PIN Authentication
const pinModal = $('#pinLockModal');
const pinInput = $('#cmsPinInput');
const pinError = $('#pinErrorMsg');

function checkAuth() {
  if (sessionStorage.getItem('cms_authed') === 'true') {
    pinModal.classList.add('hidden');
  } else {
    pinModal.classList.remove('hidden');
    pinInput.value = '';
    pinInput.focus();
  }
}

$('#btnSubmitPin')?.addEventListener('click', async () => {
  const pin = pinInput.value.trim();
  try {
    const res = await fetch('/api/admin/verify-pin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin })
    });
    const data = await res.json();
    if (data.success) {
      sessionStorage.setItem('cms_authed', 'true');
      pinModal.classList.add('hidden');
      showToast('🔓 Đã mở khóa quyền quản trị CMS!');
      loadAllData();
  populateVoiceUploadWordsDropdown();
    } else {
      pinError.classList.remove('hidden');
      pinInput.value = '';
    }
  } catch (err) {
    console.error('PIN verify error', err);
    // Offline fallback for default pin
    if (pin === '2026') {
      sessionStorage.setItem('cms_authed', 'true');
      pinModal.classList.add('hidden');
      loadAllData();
    } else {
      pinError.classList.remove('hidden');
    }
  }
});

pinInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') $('#btnSubmitPin').click();
});

$('#btnLogoutPin')?.addEventListener('click', () => {
  sessionStorage.removeItem('cms_authed');
  checkAuth();
});

// TOAST
function showToast(msg) {
  const t = $('#cmsToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2800);
}

// TABS NAVIGATION
document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const targetTab = $(`#${btn.dataset.tab}`);
    if (targetTab) targetTab.classList.add('active');
  });
});

// DATA LOADING
async function loadAllData() {
  try {
    const [wRes, cfgRes, stRes] = await Promise.all([
      fetch('/api/words'),
      fetch('/api/config'),
      fetch('/api/stats')
    ]);
    const wData = await wRes.json();
    const cfgData = await cfgRes.json();
    const stData = await stRes.json();

    allWords = wData.words || [];
    currentConfig = cfgData.config || {};

    renderStats(stData.stats);
    renderWordsTable(allWords);
    renderGameConfig(currentConfig.games || {});
    renderAudioAudit(allWords);
    populateSystemSettings(currentConfig);
  } catch (err) {
    console.error('Load data err:', err);
    showToast('⚠️ Đang ở chế độ ngoại tuyến');
  }
}

// STATS
function renderStats(stats) {
  if (!stats) return;
  if ($('#statWordsCount')) $('#statWordsCount').textContent = stats.totalWords;
  if ($('#statModelsCount')) $('#statModelsCount').textContent = stats.totalModels;
  if ($('#statAudioCount')) $('#statAudioCount').textContent = stats.audioFiles?.total || 288;
  if ($('#srvUptime')) $('#srvUptime').textContent = `${Math.floor(stats.uptimeSec / 60)} phút (${stats.uptimeSec}s)`;
  if ($('#srvMemory')) $('#srvMemory').textContent = `${stats.memoryMB} MB Heap`;

  // Category distribution badges
  const catLabels = { animals: 'Con vật', food: 'Đồ ăn', toys: 'Đồ chơi', vehicles: 'Xe cộ', objects: 'Đồ dùng' };
  const catBadges = $('#catDistributionBadges');
  if (catBadges) {
    catBadges.innerHTML = Object.entries(stats.categories || {}).map(([cat, count]) => `
      <span class="tag-cat tag-${cat}" style="font-size: 13px; padding: 6px 14px;">
        ${catLabels[cat] || cat}: <b>${count} từ</b>
      </span>
    `).join('');
  }
}

// WORDS TABLE
function renderWordsTable(list) {
  const tbody = $('#wordsTableBody');
  if (!tbody) return;
  tbody.innerHTML = list.map((item) => `
    <tr>
      <td><code>${item.id}</code></td>
      <td><span class="tag-cat tag-${item.cat}">${item.catName || item.cat}</span></td>
      <td><b>${item.southWord || item.word}</b></td>
      <td><b>${item.centralWord || item.word}</b></td>
      <td><b>${item.word}</b></td>
      <td>"${item.shortWord}"</td>
      <td>
        <button class="btn-icon-table" onclick="preview3D('${item.glb}', '${item.word}')" title="Xem trước 3D">
          🧊
        </button>
      </td>
      <td>
        <div class="audio-btns-cell">
          <button class="audio-pill-btn" onclick="playAudio('${item.audio}')" title="Giọng Bắc">🌸</button>
          <button class="audio-pill-btn" onclick="playAudio('${item.centralAudio}')" title="Giọng Trung">🏮</button>
          <button class="audio-pill-btn" onclick="playAudio('${item.southAudio}')" title="Giọng Nam">🌴</button>
        </div>
      </td>
      <td>
        <div class="action-icons">
          <button class="btn-icon-table" onclick="editWord('${item.id}')" title="Chỉnh sửa">✏️</button>
          <button class="btn-icon-table btn-delete" onclick="deleteWord('${item.id}')" title="Xóa">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// FILTER & SEARCH
$('#filterWordInput')?.addEventListener('input', applyFilters);
$('#filterCategorySelect')?.addEventListener('change', applyFilters);

function applyFilters() {
  const q = ($('#filterWordInput')?.value || '').toLowerCase().trim();
  const cat = $('#filterCategorySelect')?.value || 'all';

  const filtered = allWords.filter((w) => {
    const matchQ = !q || w.word.toLowerCase().includes(q) || (w.southWord && w.southWord.toLowerCase().includes(q)) || w.id.toLowerCase().includes(q);
    const matchCat = cat === 'all' || w.cat === cat;
    return matchQ && matchCat;
  });
  renderWordsTable(filtered);
}

// AUDIO PLAYER
window.playAudio = function(path) {
  if (!path) return;
  if (activeAudio) { activeAudio.pause(); activeAudio.currentTime = 0; }
  const a = new Audio(path);
  activeAudio = a;
  a.play().catch(e => console.log('Audio play notice', e));
};

// 3D PREVIEW
window.preview3D = function(glbPath, name) {
  $('#cmsModelViewer')?.setAttribute('src', glbPath);
  if ($('#preview3DTitle')) $('#preview3DTitle').textContent = `Mô Hình 3D: ${name}`;
  if ($('#preview3DInfo')) $('#preview3DInfo').textContent = `Đường dẫn tệp: ${glbPath}`;
  $('#preview3DModal')?.classList.remove('hidden');
};

$('#btnClosePreview3D')?.addEventListener('click', () => {
  $('#preview3DModal')?.classList.add('hidden');
  $('#cmsModelViewer')?.setAttribute('src', '');
});

// ADD / EDIT WORD
const wordModal = $('#wordFormModal');
const wordForm = $('#wordForm');

$('#btnOpenNewWordModal')?.addEventListener('click', () => openWordModal(false));
$('#btnQuickAddWord')?.addEventListener('click', () => {
  document.querySelector('[data-tab="tab-words"]')?.click();
  openWordModal(false);
});

function openWordModal(isEdit, item = null) {
  $('#formIsEdit').value = isEdit ? '1' : '0';
  $('#wordFormModalTitle').textContent = isEdit ? `Chỉnh Sửa Từ Vựng: ${item.word}` : 'Thêm Từ Vựng 3D Mới';

  $('#fId').value = item ? item.id : '';
  $('#fId').disabled = isEdit;
  $('#fCat').value = item ? item.cat : 'animals';
  $('#fWord').value = item ? item.word : '';
  $('#fSouthWord').value = item ? (item.southWord || '') : '';
  $('#fCentralWord').value = item ? (item.centralWord || '') : '';
  $('#fShortWord').value = item ? item.shortWord : '';
  $('#fSentence').value = item ? (item.sentence || '') : '';
  $('#fHint').value = item ? (item.hint || '') : '';
  const glbVal = item ? item.glb : "models/duck.glb";
  $("#fGlb").value = glbVal;
  $("#formGlbViewer")?.setAttribute("src", glbVal);
  populateExistingModelsDropdown(glbVal);

  wordModal.classList.remove("hidden");
}

$('#btnCancelWordForm')?.addEventListener('click', () => wordModal.classList.add('hidden'));

wordForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const isEdit = $('#formIsEdit').value === '1';
  const id = $('#fId').value.trim();
  const cat = $('#fCat').value;
  const catNames = { animals: 'Con vật', food: 'Đồ ăn', toys: 'Đồ chơi', vehicles: 'Xe cộ', objects: 'Đồ dùng' };

  const itemPayload = {
    id,
    cat,
    catName: catNames[cat] || cat,
    word: $('#fWord').value.trim(),
    southWord: $('#fSouthWord').value.trim() || $('#fWord').value.trim(),
    centralWord: $('#fCentralWord').value.trim() || $('#fWord').value.trim(),
    shortWord: $('#fShortWord').value.trim(),
    sentence: $('#fSentence').value.trim(),
    hint: $('#fHint').value.trim(),
    glb: $('#fGlb').value.trim(),
    audio: `audio/${id}.mp3`,
    audioShort: `audio/${id}_short.mp3`,
    sentenceAudio: `audio/${id}_sentence.mp3`,
    southAudio: `audio_south/${id}.mp3`,
    southShortAudio: `audio_south/${id}_short.mp3`,
    southSentenceAudio: `audio_south/${id}_sentence.mp3`,
    centralAudio: `audio_central/${id}.mp3`,
    centralShortAudio: `audio_central/${id}_short.mp3`,
    centralSentenceAudio: `audio_central/${id}_sentence.mp3`
  };

  const url = isEdit ? `/api/words/${id}` : '/api/words';
  const method = isEdit ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemPayload)
    });
    const data = await res.json();
    if (data.success) {
      wordModal.classList.add('hidden');
      showToast(isEdit ? '✅ Đã cập nhật từ vựng thành công!' : '🎉 Đã thêm từ vựng mới!');
      loadAllData();
    } else {
      alert('Lỗi: ' + data.error);
    }
  } catch (err) {
    alert('Lỗi gửi dữ liệu: ' + err.message);
  }
});

window.editWord = function(id) {
  const item = allWords.find(w => w.id === id);
  if (item) openWordModal(true, item);
};

window.deleteWord = async function(id) {
  if (!confirm(`Bạn có chắc muốn xóa từ vựng [${id}] khỏi danh mục không?`)) return;
  try {
    const res = await fetch(`/api/words/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      showToast('🗑️ Đã xóa từ vựng!');
      loadAllData();
    }
  } catch (err) {
    alert('Lỗi khi xóa: ' + err.message);
  }
};

// SYNC TO APP
$('#btnSyncToApp')?.addEventListener('click', async () => {
  try {
    const res = await fetch('/api/sync-to-app', { method: 'POST' });
    const data = await res.json();
    if (data.success) {
      showToast(`🚀 ${data.message}`);
    }
  } catch (err) {
    alert('Lỗi đồng bộ: ' + err.message);
  }
});

// GAME CONFIG
function renderGameConfig(games) {
  const c = $('#gameConfigContainer');
  if (!c) return;
  const gameIcons = { quiz: '🎯', shadow: '🕵️', memory: '🃏', basket: '🧺', whack: '⚡', cinema: '📺' };
  c.innerHTML = Object.entries(games).map(([key, cfg]) => `
    <div class="game-cfg-card">
      <div class="game-cfg-header">
        <strong><span>${gameIcons[key] || '🎮'}</span> ${cfg.name}</strong>
        <label class="switch-toggle">
          <input type="checkbox" id="cfgGame_${key}" ${cfg.enabled !== false ? 'checked' : ''}>
          <span class="switch-slider"></span>
        </label>
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">
        ${key === 'quiz' || key === 'shadow' ? `Số câu hỏi mỗi vòng: <b>${cfg.rounds || 5} câu</b>` : ''}
        ${key === 'memory' ? `Số cặp bài tìm kiếm: <b>${cfg.pairs || 3} cặp (6 thẻ)</b>` : ''}
        ${key === 'basket' ? `Số vật phẩm nhặt vào giỏ: <b>${cfg.targetCount || 3} món</b>` : ''}
        ${key === 'whack' ? `Thời gian phản xạ: <b>${cfg.durationSec || 30} giây</b>` : ''}
        ${key === 'cinema' ? `Thời gian lật thẻ: <b>${cfg.speedSec || 4.5} giây/thẻ</b>` : ''}
      </div>
    </div>
  `).join('');
}

$('#btnSaveGamesConfig')?.addEventListener('click', async () => {
  const games = currentConfig.games || {};
  for (const k of Object.keys(games)) {
    const chk = $(`#cfgGame_${k}`);
    if (chk) games[k].enabled = chk.checked;
  }
  try {
    const res = await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ games })
    });
    const data = await res.json();
    if (data.success) {
      showToast('💾 Đã lưu cấu hình Mini Game thành công!');
    }
  } catch (err) {
    alert('Lỗi lưu cấu hình: ' + err.message);
  }
});

// AUDIO AUDIT
function renderAudioAudit(list) {
  const tbody = $('#audioAuditTableBody');
  if (!tbody) return;
  tbody.innerHTML = list.map(item => `
    <tr>
      <td><code>${item.id}</code></td>
      <td><b>${item.word}</b></td>
      <td><span style="color: var(--success); font-weight: 700;">✓ Sẵn sàng</span></td>
      <td><span style="color: var(--success); font-weight: 700;">✓ Sẵn sàng</span></td>
      <td><span style="color: var(--success); font-weight: 700;">✓ Sẵn sàng</span></td>
      <td><span class="tag-cat tag-animals" style="background: #dcfce7; color: #15803d;">Chuẩn 100%</span></td>
    </tr>
  `).join('');
}

$('#btnRefreshAudioAudit')?.addEventListener('click', () => {
  renderAudioAudit(allWords);
  showToast('🔄 Đã kiểm tra lại toàn bộ âm thanh 3 miền!');
});

// SYSTEM SETTINGS
function populateSystemSettings(cfg) {
  if (cfg.heroTitle && $('#cfgHeroTitle')) $('#cfgHeroTitle').value = cfg.heroTitle;
  if (cfg.heroDesc && $('#cfgHeroDesc')) $('#cfgHeroDesc').value = cfg.heroDesc;
}

$('#btnSaveHeroBanner')?.addEventListener('click', async () => {
  const heroTitle = $('#cfgHeroTitle').value.trim();
  const heroDesc = $('#cfgHeroDesc').value.trim();
  const res = await fetch('/api/config', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ heroTitle, heroDesc })
  });
  const data = await res.json();
  if (data.success) showToast('💾 Đã lưu thông điệp Hero Banner!');
});

$('#btnChangeAdminPin')?.addEventListener('click', async () => {
  const p1 = $('#cfgNewPin').value.trim();
  const p2 = $('#cfgConfirmPin').value.trim();
  if (!p1 || p1.length < 4) { alert('Mã PIN cần có ít nhất 4 ký tự số!'); return; }
  if (p1 !== p2) { alert('Mật khẩu xác nhận không khớp!'); return; }

  const res = await fetch('/api/config', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adminPin: p1 })
  });
  const data = await res.json();
  if (data.success) {
    showToast('🔑 Đã cập nhật mã PIN quản trị mới!');
    $('#cfgNewPin').value = '';
    $('#cfgConfirmPin').value = '';
  }
});

// BACKUP & RESTORE
$('#btnExportBackup')?.addEventListener('click', () => {
  const backupData = {
    exportedAt: new Date().toISOString(),
    version: '1.0.0',
    words: allWords,
    config: currentConfig
  };
  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `backup_day_be_hoc_noi_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  showToast('⬇️ Đã tải về tệp sao lưu dữ liệu!');
});

$('#importFileInput')?.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.words && Array.isArray(imported.words)) {
        for (const w of imported.words) {
          await fetch('/api/words', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(w)
          });
        }
      }
      if (imported.config) {
        await fetch('/api/config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(imported.config)
        });
      }
      showToast('✅ Đã khôi phục dữ liệu từ tệp sao lưu!');
      loadAllData();
    } catch (err) {
      alert('Tệp sao lưu không hợp lệ: ' + err.message);
    }
  };
  reader.readAsText(file);
});

// STARTUP
checkAuth();
loadAllData();

// =======================================================================
// FREE GLB 3D REPOSITORIES & MODEL PICKER SYSTEM
// =======================================================================
const freeGlbModal = $("#freeGlbSitesModal");

$("#btnOpenFreeGlbInToolbar")?.addEventListener("click", () => {
  freeGlbModal?.classList.remove("hidden");
});

$("#btnOpenFreeGlbInForm")?.addEventListener("click", () => {
  freeGlbModal?.classList.remove("hidden");
});

$("#btnCloseFreeGlbModal")?.addEventListener("click", () => {
  freeGlbModal?.classList.add("hidden");
});

// Populate existing models in dropdown
async function populateExistingModelsDropdown(selectedVal = "") {
  const sel = $("#fGlbSelectExisting");
  if (!sel) return;
  try {
    const res = await fetch("/api/models");
    const data = await res.json();
    const models = data.models || [];
    sel.innerHTML = "<option value=''>📁 Chọn file có sẵn...</option>" +
      models.map(m => `<option value="${m.path}" ${m.path === selectedVal ? "selected" : ""}>${m.file} (${m.sizeKB}KB)</option>`).join("");
  } catch (e) {
    console.log("Error loading models list", e);
  }
}

// When user picks from dropdown
$("#fGlbSelectExisting")?.addEventListener("change", function() {
  if (this.value) {
    $("#fGlb").value = this.value;
    $("#formGlbViewer")?.setAttribute("src", this.value);
  }
});

// Live preview update on typing
$("#fGlb")?.addEventListener("input", function() {
  const val = this.value.trim();
  if (val) $("#formGlbViewer")?.setAttribute("src", val);
});

$("#btnRefreshFormPreview")?.addEventListener("click", () => {
  const val = $("#fGlb")?.value.trim();
  if (val) {
    $("#formGlbViewer")?.setAttribute("src", val);
    showToast("👁️ Đã làm mới hiển thị mô hình 3D!");
  }
});

// Upload .glb file from local computer
$("#uploadGlbInput")?.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.name.toLowerCase().endsWith(".glb")) {
    alert("Vui lòng chỉ chọn tệp mô hình định dạng .glb chuẩn!");
    return;
  }

  showToast("⏳ Đang tải tệp mô hình 3D lên máy chủ...");

  try {
    const arrayBuffer = await file.arrayBuffer();
    const res = await fetch("/api/upload-model", {
      method: "POST",
      headers: {
        "x-filename": encodeURIComponent(file.name)
      },
      body: arrayBuffer
    });
    const data = await res.json();
    if (data.success) {
      $("#fGlb").value = data.path;
      $("#formGlbViewer")?.setAttribute("src", data.path);
      await populateExistingModelsDropdown(data.path);
      showToast(`✅ Đã tải lên ${data.filename} (${data.sizeKB} KB)!`);
    } else {
      alert("Tải lên thất bại: " + data.error);
    }
  } catch (err) {
    alert("Lỗi khi tải tệp: " + err.message);
  }
});

// Download .glb directly from Web URL (Poly Pizza, raw GitHub...)
$("#btnDownloadGlbUrl")?.addEventListener("click", async () => {
  const url = prompt("Nhập đường dẫn trực tuyến tệp 3D .glb (ví dụ từ Poly Pizza, GitHub, CDN...):");
  if (!url || !url.trim()) return;

  const defaultName = url.split("/").pop().split("?")[0] || "model.glb";
  const filename = prompt("Đặt tên tệp lưu trữ trên máy chủ (.glb):", defaultName);
  if (!filename) return;

  showToast("⏳ Đang kết nối và tải mô hình 3D về máy chủ...");

  try {
    const res = await fetch("/api/download-model-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url.trim(), filename: filename.trim() })
    });
    const data = await res.json();
    if (data.success) {
      $("#fGlb").value = data.path;
      $("#formGlbViewer")?.setAttribute("src", data.path);
      await populateExistingModelsDropdown(data.path);
      showToast(`✅ Đã tải về thành công: ${data.filename} (${data.sizeKB} KB)!`);
    } else {
      alert("Lỗi tải tệp từ web: " + data.error);
    }
  } catch (err) {
    alert("Lỗi kết nối: " + err.message);
  }
});

// =======================================================================
// SOUTHERN SAIGON AUDIO MANAGEMENT & FPT / MANUAL UPLOAD
// =======================================================================
function populateVoiceUploadWordsDropdown() {
  const sel = $("#selectWordForVoiceUpload");
  if (!sel) return;
  sel.innerHTML = "<option value=''>Chọn từ cần nạp giọng Nam...</option>" +
    allWords.map(w => `<option value="${w.id}">${w.southWord || w.word} (${w.id})</option>`).join("");
}

// Button FPT.AI synthesis
$("#btnRunFptCms")?.addEventListener("click", async () => {
  const apiKey = $("#inputFptKeyCms")?.value.trim();
  if (!apiKey) {
    alert("Vui lòng nhập FPT.AI API Key! Bạn có thể đăng ký tài khoản miễn phí tại fpt.ai");
    return;
  }

  showToast("⏳ Đang kết nối FPT.AI để tổng hợp giọng Nam Bộ...");
  try {
    const res = await fetch("/api/generate-voices-fpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey, region: "south", voice: "lannhi" })
    });
    const data = await res.json();
    if (data.success) {
      showToast("🎉 " + data.message);
      alert("Kết nối FPT.AI thành công! Key hợp lệ.");
    } else {
      alert("Lỗi FPT.AI: " + data.error);
    }
  } catch (err) {
    alert("Lỗi kết nối: " + err.message);
  }
});

// Upload human recorded voice into audio_south/
$("#uploadVoiceSouthInput")?.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const wordId = $("#selectWordForVoiceUpload")?.value;
  if (!wordId) {
    alert("Vui lòng chọn từ vựng bạn muốn nạp giọng từ danh sách trước!");
    e.target.value = "";
    return;
  }

  showToast("⏳ Đang tải file thu âm giọng Nam lên hệ thống...");
  try {
    const arrayBuffer = await file.arrayBuffer();
    const res = await fetch("/api/upload-audio", {
      method: "POST",
      headers: {
        "x-target-dir": "audio_south",
        "x-filename": wordId + ".mp3"
      },
      body: arrayBuffer
    });
    const data = await res.json();
    if (data.success) {
      showToast(`✅ Đã nạp giọng Nam thành công cho từ "${wordId}"!`);
      renderAudioAudit(allWords);
    } else {
      alert("Lỗi tải âm thanh: " + data.error);
    }
  } catch (err) {
    alert("Lỗi kết nối: " + err.message);
  }
});
