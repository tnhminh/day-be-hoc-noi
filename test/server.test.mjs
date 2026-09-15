import test from 'node:test';
import assert from 'node:assert';
import http from 'node:http';
import { spawn } from 'node:child_process';

test('Server healthcheck and headers on port 5198', async () => {
  const srv = spawn('node', ['server.js'], {
    env: { ...process.env, PORT: '5198', HOST: '127.0.0.1' },
    stdio: 'ignore'
  });

  await new Promise(r => setTimeout(r, 900));

  try {
    // 1. Healthcheck
    const health = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:5198/healthz', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
      }).on('error', reject);
    });

    assert.strictEqual(health.status, 200);
    assert.strictEqual(health.body.status, 'ok');
    assert.strictEqual(health.body.modelsCount, 29);

    // 2. 3D GLB Static Serving
    const glbRes = await new Promise((resolve, reject) => {
      http.request('http://127.0.0.1:5198/models/duck.glb', { method: 'HEAD' }, (res) => {
        resolve({ status: res.statusCode, headers: res.headers });
      }).on('error', reject).end();
    });

    assert.strictEqual(glbRes.status, 200);
    assert.strictEqual(glbRes.headers['content-type'], 'model/gltf-binary');
    assert.ok(glbRes.headers['cache-control'].includes('immutable'));

    // 3. CMS API: GET /api/words
    const wordsRes = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:5198/api/words', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
      }).on('error', reject);
    });
    assert.strictEqual(wordsRes.status, 200);
    assert.strictEqual(wordsRes.body.success, true);
    assert.strictEqual(wordsRes.body.count, 29);

    // 4. CMS API: GET /api/config
    const configRes = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:5198/api/config', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
      }).on('error', reject);
    });
    assert.strictEqual(configRes.status, 200);
    assert.strictEqual(configRes.body.success, true);
    assert.ok(configRes.body.config.games.quiz);
    assert.ok(configRes.body.config.games.memory);

    // 5. CMS API: GET /api/stats
    const statsRes = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:5198/api/stats', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
      }).on('error', reject);
    });
    assert.strictEqual(statsRes.status, 200);
    assert.strictEqual(statsRes.body.stats.totalWords, 29);
    assert.strictEqual(statsRes.body.stats.totalModels, 29);

    // 6. CMS Admin Page: GET /admin
    const adminRes = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:5198/admin', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, html: data }));
      }).on('error', reject);
    });
    assert.strictEqual(adminRes.status, 200);
    assert.ok(adminRes.headers['content-type'].includes('text/html'));
    assert.ok(adminRes.html.includes('CMS Vận Hành'));

  } finally {
    srv.kill('SIGTERM');
  }
});
