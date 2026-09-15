import fs from 'fs';
import test from 'node:test';
import assert from 'node:assert';

test('PWA manifest validity', () => {
  assert.ok(fs.existsSync('manifest.webmanifest'), 'manifest.webmanifest must exist');
  const manifest = JSON.parse(fs.readFileSync('manifest.webmanifest', 'utf8'));
  assert.strictEqual(manifest.name, 'Bé Học Nói Tiếng Việt 3D');
  assert.strictEqual(manifest.display, 'standalone');
  assert.ok(manifest.icons && manifest.icons.length >= 2, 'Must have at least 2 icons');
});

test('Service Worker exists and has core assets precached', () => {
  assert.ok(fs.existsSync('sw.js'), 'sw.js must exist');
  const swContent = fs.readFileSync('sw.js', 'utf8');
  assert.ok(swContent.includes('CORE_ASSETS'), 'sw.js must define CORE_ASSETS');
  assert.ok(swContent.includes('model-viewer.min.js'), 'sw.js must precache model-viewer');
});

test('Icons exist for PWA', () => {
  assert.ok(fs.existsSync('icon.svg'), 'icon.svg must exist');
  assert.ok(fs.existsSync('favicon.svg'), 'favicon.svg must exist');
});
