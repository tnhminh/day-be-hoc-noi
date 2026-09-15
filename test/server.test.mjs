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

    const glbRes = await new Promise((resolve, reject) => {
      http.request('http://127.0.0.1:5198/models/duck.glb', { method: 'HEAD' }, (res) => {
        resolve({ status: res.statusCode, headers: res.headers });
      }).on('error', reject).end();
    });

    assert.strictEqual(glbRes.status, 200);
    assert.strictEqual(glbRes.headers['content-type'], 'model/gltf-binary');
    assert.ok(glbRes.headers['cache-control'].includes('immutable'));
  } finally {
    srv.kill('SIGTERM');
  }
});
