import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT, 10) || 5173;
const HOST = process.env.HOST || '0.0.0.0';
const startTime = Date.now();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg'
};

const COMPRESSIBLE = new Set([
  'text/html; charset=utf-8',
  'text/css; charset=utf-8',
  'application/javascript; charset=utf-8',
  'application/json; charset=utf-8',
  'application/manifest+json; charset=utf-8',
  'image/svg+xml'
]);

// Helper for JSON request body
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(data));
}

// Data store paths
const WORDS_FILE = path.join(__dirname, 'data', 'words.json');
const CONFIG_FILE = path.join(__dirname, 'data', 'config.json');

function getWords() {
  if (fs.existsSync(WORDS_FILE)) {
    return JSON.parse(fs.readFileSync(WORDS_FILE, 'utf8'));
  }
  return [];
}

function saveWords(words) {
  if (!fs.existsSync(path.dirname(WORDS_FILE))) {
    fs.mkdirSync(path.dirname(WORDS_FILE), { recursive: true });
  }
  fs.writeFileSync(WORDS_FILE, JSON.stringify(words, null, 2), 'utf8');
}

function getConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  }
  return {
    heroTitle: 'Chạm & Xoay Hình 3D Để Tập Nói!',
    heroDesc: 'Bé hãy chạm vào từng con vật, đồ ăn, đồ chơi... nghe cô phát âm chuẩn rồi nhắc lại theo nghen.',
    games: {
      quiz: { enabled: true, name: 'Đố Vui Nghe Tiếng', rounds: 5 },
      shadow: { enabled: true, name: 'Đoán Bóng 3D', rounds: 5 },
      memory: { enabled: true, name: 'Lật Thẻ Trí Nhớ 3D', pairs: 3 },
      basket: { enabled: true, name: 'Thu Hoạch Bỏ Giỏ', targetCount: 3 },
      whack: { enabled: true, name: 'Bắt Bạn Nhanh Tay', durationSec: 30 },
      cinema: { enabled: true, name: 'Rạp Phim Flashcard', speedSec: 4.5 }
    },
    defaultVoice: 'south',
    defaultSpeechRate: 1.0,
    adminPin: '2026'
  };
}

function saveConfig(config) {
  if (!fs.existsSync(path.dirname(CONFIG_FILE))) {
    fs.mkdirSync(path.dirname(CONFIG_FILE), { recursive: true });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf8');
}

const server = http.createServer(async (req, res) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Healthcheck endpoint
  if (pathname === '/healthz' || pathname === '/api/health') {
    const words = getWords();
    sendJson(res, 200, {
      status: 'ok',
      uptimeSec: Math.floor((Date.now() - startTime) / 1000),
      timestamp: new Date().toISOString(),
      modelsCount: words.length || 29
    });
    return;
  }

  // =========================================================================
  // REST API ENDPOINTS FOR CMS
  // =========================================================================
  if (pathname.startsWith('/api/')) {
    try {
      // 1. GET /api/words
      if (req.method === 'GET' && pathname === '/api/words') {
        const words = getWords();
        sendJson(res, 200, { success: true, count: words.length, words });
        return;
      }

      // 2. POST /api/words (Create new word)
      if (req.method === 'POST' && pathname === '/api/words') {
        const payload = await parseJsonBody(req);
        if (!payload.id || !payload.word) {
          sendJson(res, 400, { success: false, error: 'Thiếu trường id hoặc word' });
          return;
        }
        const words = getWords();
        const existingIdx = words.findIndex(w => w.id === payload.id);
        if (existingIdx >= 0) {
          words[existingIdx] = { ...words[existingIdx], ...payload };
        } else {
          words.push(payload);
        }
        saveWords(words);
        sendJson(res, 200, { success: true, item: payload, total: words.length });
        return;
      }

      // 3. PUT /api/words/:id (Update existing word)
      if (req.method === 'PUT' && pathname.startsWith('/api/words/')) {
        const id = pathname.replace('/api/words/', '').trim();
        const payload = await parseJsonBody(req);
        const words = getWords();
        const idx = words.findIndex(w => w.id === id);
        if (idx === -1) {
          sendJson(res, 404, { success: false, error: 'Không tìm thấy từ vựng ID: ' + id });
          return;
        }
        words[idx] = { ...words[idx], ...payload, id };
        saveWords(words);
        sendJson(res, 200, { success: true, item: words[idx] });
        return;
      }

      // 4. DELETE /api/words/:id
      if (req.method === 'DELETE' && pathname.startsWith('/api/words/')) {
        const id = pathname.replace('/api/words/', '').trim();
        let words = getWords();
        const prevCount = words.length;
        words = words.filter(w => w.id !== id);
        if (words.length === prevCount) {
          sendJson(res, 404, { success: false, error: 'Không tìm thấy từ vựng ID: ' + id });
          return;
        }
        saveWords(words);
        sendJson(res, 200, { success: true, deletedId: id, total: words.length });
        return;
      }

      // 5. GET /api/config
      if (req.method === 'GET' && pathname === '/api/config') {
        const config = getConfig();
        sendJson(res, 200, { success: true, config });
        return;
      }

      // 6. POST /api/config
      if (req.method === 'POST' && pathname === '/api/config') {
        const payload = await parseJsonBody(req);
        const current = getConfig();
        const updated = { ...current, ...payload };
        saveConfig(updated);
        sendJson(res, 200, { success: true, config: updated });
        return;
      }

      // 7. GET /api/stats
      if (req.method === 'GET' && pathname === '/api/stats') {
        const words = getWords();
        const config = getConfig();
        const catCounts = {};
        for (const w of words) {
          catCounts[w.cat] = (catCounts[w.cat] || 0) + 1;
        }

        const modelsDir = path.join(__dirname, 'models');
        const models = fs.existsSync(modelsDir) ? fs.readdirSync(modelsDir).filter(f => f.endsWith('.glb')) : [];

        const audioNorth = fs.existsSync(path.join(__dirname, 'audio')) ? fs.readdirSync(path.join(__dirname, 'audio')).filter(f => f.endsWith('.mp3')).length : 0;
        const audioCentral = fs.existsSync(path.join(__dirname, 'audio_central')) ? fs.readdirSync(path.join(__dirname, 'audio_central')).filter(f => f.endsWith('.mp3')).length : 0;
        const audioSouth = fs.existsSync(path.join(__dirname, 'audio_south')) ? fs.readdirSync(path.join(__dirname, 'audio_south')).filter(f => f.endsWith('.mp3')).length : 0;

        sendJson(res, 200, {
          success: true,
          stats: {
            totalWords: words.length,
            categories: catCounts,
            totalModels: models.length,
            audioFiles: {
              north: audioNorth,
              central: audioCentral,
              south: audioSouth,
              total: audioNorth + audioCentral + audioSouth
            },
            gamesConfig: config.games || {},
            uptimeSec: Math.floor((Date.now() - startTime) / 1000),
            memoryMB: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)
          }
        });
        return;
      }

      // 8. GET /api/models
      if (req.method === 'GET' && pathname === '/api/models') {
        const modelsDir = path.join(__dirname, 'models');
        const list = fs.existsSync(modelsDir)
          ? fs.readdirSync(modelsDir).filter(f => f.endsWith('.glb')).map(f => ({
              file: f,
              path: `models/${f}`,
              sizeKB: (fs.statSync(path.join(modelsDir, f)).size / 1024).toFixed(1)
            }))
          : [];
        sendJson(res, 200, { success: true, count: list.length, models: list });
        return;
      }

      // 9. POST /api/admin/verify-pin
      if (req.method === 'POST' && pathname === '/api/admin/verify-pin') {
        const payload = await parseJsonBody(req);
        const config = getConfig();
        const expectedPin = String(config.adminPin || '2026');
        const inputPin = String(payload.pin || '');
        if (inputPin === expectedPin) {
          sendJson(res, 200, { success: true, message: 'Xác thực thành công!' });
        } else {
          sendJson(res, 401, { success: false, message: 'Mã PIN chưa chính xác!' });
        }
        return;
      }

      // 10. POST /api/sync-to-app (Sync data/words.json into app.js)
      if (req.method === 'POST' && pathname === '/api/sync-to-app') {
        const words = getWords();
        const appPath = path.join(__dirname, 'app.js');
        if (fs.existsSync(appPath)) {
          let appContent = fs.readFileSync(appPath, 'utf8');
          const regex = /const rawWords\s*=\s*\[[\s\S]*?\];/;
          const replacement = `const rawWords = ${JSON.stringify(words, null, 2)};`;
          if (regex.test(appContent)) {
            appContent = appContent.replace(regex, replacement);
            fs.writeFileSync(appPath, appContent, 'utf8');
            sendJson(res, 200, { success: true, message: 'Đã đồng bộ từ vựng vào app.js thành công!', count: words.length });
            return;
          }
        }
        sendJson(res, 200, { success: true, message: 'Đã lưu trong data/words.json' });
        return;
      }

      sendJson(res, 404, { success: false, error: 'API endpoint không tồn tại: ' + pathname });
      return;
    } catch (apiErr) {
      console.error('[API Error]', apiErr);
      sendJson(res, 500, { success: false, error: apiErr.message });
      return;
    }
  }

  // =========================================================================
  // STATIC FILE SERVING & ROUTE MAPPING
  // =========================================================================

  // Root mapping
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (pathname === '/admin' || pathname === '/cms') {
    pathname = '/admin.html';
  }

  const safePath = path.normalize(path.join(__dirname, pathname));
  if (!safePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Không tìm thấy tệp yêu cầu');
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Caching headers
    if (ext === '.glb' || ext === '.mp3') {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (ext === '.html' || ext === '.json') {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }

    // Support HTTP Range requests for audio streaming
    if (ext === '.mp3' && req.headers.range) {
      const range = req.headers.range;
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

      if (start >= stats.size || end >= stats.size) {
        res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
        res.end();
        return;
      }

      const chunksize = (end - start) + 1;
      const stream = fs.createReadStream(safePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType
      });
      stream.pipe(res);
      return;
    }

    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-Type', contentType);

    // Gzip compression for compressible text assets
    const acceptEncoding = req.headers['accept-encoding'] || '';
    if (COMPRESSIBLE.has(contentType) && acceptEncoding.includes('gzip')) {
      res.setHeader('Content-Encoding', 'gzip');
      res.writeHead(200);
      const rawStream = fs.createReadStream(safePath);
      rawStream.pipe(zlib.createGzip()).pipe(res);
    } else {
      res.setHeader('Content-Length', stats.size);
      res.writeHead(200);
      fs.createReadStream(safePath).pipe(res);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`[Production Server] Running at http://${HOST}:${PORT}`);
  console.log(`[Production Server] CMS Admin at http://${HOST}:${PORT}/admin`);
  console.log(`[Production Server] Healthcheck at http://${HOST}:${PORT}/healthz`);
});

function shutdown(signal) {
  console.log(`[Production Server] Received ${signal}, gracefully closing...`);
  server.close(() => {
    console.log('[Production Server] Closed gracefully.');
    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
