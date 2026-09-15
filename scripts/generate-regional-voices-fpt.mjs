import fs from 'fs';
import path from 'path';

const API_KEY = process.env.FPT_AI_API_KEY || process.env.FPT_API_KEY;

if (!API_KEY) {
  console.error('\n❌ Bạn cần cung cấp FPT.AI API Key qua biến môi trường FPT_AI_API_KEY');
  console.log('Cách dùng trên PowerShell:');
  console.log('  $env:FPT_AI_API_KEY="<api_key_cua_ban>"');
  console.log('  node scripts/generate-regional-voices-fpt.mjs\n');
  process.exit(1);
}

// Voices đề xuất:
// - Miền Nam: "lannhi" (nữ nhẹ nhàng cho thiếu nhi), "minhquang" (nam ấm), "linhnhi" (nữ teen)
// - Miền Trung: "myan" (nữ Huế/Trung), "thungan" (nữ Trung)
// - Miền Bắc: "banmai" (nữ), "leminh" (nam)
const SOUTH_VOICE = process.env.SOUTH_VOICE || 'lannhi';
const CENTRAL_VOICE = process.env.CENTRAL_VOICE || 'myan';

const appJs = fs.readFileSync('app.js', 'utf8');
const match = appJs.match(/const rawWords\s*=\s*(\[[\s\S]*?\]);/);
if (!match) throw new Error('Cannot parse rawWords from app.js');
const rawWords = eval(match[1]);

async function synthesizeFpt(text, voice, outPath) {
  const url = 'https://api.fpt.ai/hmi/tts/v5';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'api-key': API_KEY,
      'voice': voice,
      'speed': '-1' // Nói chậm rãi cho bé mầm non
    },
    body: text
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`FPT API error ${res.status}: ${txt}`);
  }

  const data = await res.json();
  if (data.error) {
    throw new Error(`FPT API returned error: ${data.message || data.error}`);
  }

  const asyncAudioUrl = data.async;
  for (let i = 0; i < 35; i++) {
    await new Promise(r => setTimeout(r, 1200));
    try {
      const checkRes = await fetch(asyncAudioUrl);
      if (checkRes.status === 200) {
        const buffer = Buffer.from(await checkRes.arrayBuffer());
        fs.writeFileSync(outPath, buffer);
        console.log(`  ✓ Đã lưu: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
        return;
      }
    } catch (e) {
      // Retry polling
    }
  }
  throw new Error(`Timeout khi chờ FPT render: ${asyncAudioUrl}`);
}

async function run() {
  console.log(`🎙️ Đang tổng hợp giọng chuẩn vùng miền với FPT.AI TTS...`);
  console.log(`- Miền Nam: ${SOUTH_VOICE}`);
  console.log(`- Miền Trung: ${CENTRAL_VOICE}\n`);

  fs.mkdirSync('audio_south', { recursive: true });
  fs.mkdirSync('audio_central', { recursive: true });

  for (let i = 0; i < rawWords.length; i++) {
    const item = rawWords[i];
    console.log(`[${i + 1}/${rawWords.length}] Đang xử lý: ${item.id} (${item.word})`);

    // 1. MIỀN NAM
    const sWord = item.southWord || item.word;
    const sShort = item.southShort || item.shortWord;
    const sSentence = item.southSentence || item.sentence;

    await synthesizeFpt(sWord, SOUTH_VOICE, `audio_south/${item.id}.mp3`);
    await synthesizeFpt(sShort, SOUTH_VOICE, `audio_south/${item.id}_short.mp3`);
    await synthesizeFpt(sSentence, SOUTH_VOICE, `audio_south/${item.id}_sentence.mp3`);

    // 2. MIỀN TRUNG
    const cWord = item.centralWord || item.southWord || item.word;
    const cShort = item.centralShort || item.southShort || item.shortWord;
    const cSentence = item.centralSentence || item.southSentence || item.sentence;

    await synthesizeFpt(cWord, CENTRAL_VOICE, `audio_central/${item.id}.mp3`);
    await synthesizeFpt(cShort, CENTRAL_VOICE, `audio_central/${item.id}_short.mp3`);
    await synthesizeFpt(cSentence, CENTRAL_VOICE, `audio_central/${item.id}_sentence.mp3`);
  }

  // CÂU NHẮC VÀ LỜI KHEN THEO VÙNG MIỀN
  const prompts = [
    { id: 'greeting', south: 'Chào con! Hôm nay con muốn tập nói từ gì nè?', central: 'Chào con! Hôm ni con muốn tập nói từ chi hè?' },
    { id: 'duck_greeting', south: 'Chào con! Tui là chú vịt vàng dễ thương đây!', central: 'Chào con! Tui là chú vịt vàng dễ thương đây nè!' },
    { id: 'correct', south: 'Hoan hô! Con chọn chính xác rồi!', central: 'Hoan hô! Con chọn đúng trúng rồi nghe!' },
    { id: 'wrong', south: 'Chưa đúng rồi nè, con nghe lại rồi chọn lại nha!', central: 'Chưa đúng rồi hè, con nghe lại rồi chọn lại nghen!' },
    { id: 'find_prompt', south: 'Con lắng nghe và chọn đúng hình nghen!', central: 'Con lắng nghe rồi chọn đúng hình nghe!' },
    { id: 'quiz_complete', south: 'Hoan hô! Con đã hoàn thành xuất sắc vòng đố vui rồi nè!', central: 'Hoan hô! Con đã hoàn thành xuất sắc vòng đố vui rồi nghe!' },
    { id: 'praise', south: 'Con nói giỏi dữ ta! Thưởng cho con một ngôi sao sáng nè!', central: 'Con nói giỏi ghê ta! Thưởng cho con ngôi sao sáng nè!' },
    { id: 'star_reward', south: 'Ting ting! Con nhận được một ngôi sao vàng lấp lánh!', central: 'Ting ting! Con nhận thêm một ngôi sao vàng lấp lánh!' }
  ];

  console.log('\n🎙️ Đang tổng hợp các câu nhắc & lời khen...');
  for (const p of prompts) {
    console.log(`- Prompt: ${p.id}`);
    await synthesizeFpt(p.south, SOUTH_VOICE, `audio_south/${p.id}.mp3`);
    await synthesizeFpt(p.central, CENTRAL_VOICE, `audio_central/${p.id}.mp3`);
  }

  console.log('\n🎉 Hoàn tất 100% việc tạo audio giọng vùng miền!');
}

run().catch((err) => {
  console.error('\n❌ Thất bại:', err.message);
  process.exit(1);
});
