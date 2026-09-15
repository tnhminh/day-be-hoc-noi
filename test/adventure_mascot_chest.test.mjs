import fs from 'fs';
import test from 'node:test';
import assert from 'node:assert';

const html = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');

test('50K Upgrade: Touch Particle Canvas & Game Juice exist in index.html', () => {
  assert.ok(html.includes('id="particleCanvas"'), 'particleCanvas must exist in HTML');
  assert.ok(css.includes('.particle-canvas'), 'particle-canvas style must exist in CSS');
  assert.ok(appJs.includes("const particleCanvas = $('#particleCanvas');"), 'particleCanvas script must be bound in app.js');
});

test('50K Upgrade: View Mode Switcher and Adventure Map UI exist', () => {
  assert.ok(html.includes('id="btnViewMap"'), 'btnViewMap must exist in HTML');
  assert.ok(html.includes('id="btnViewGrid"'), 'btnViewGrid must exist in HTML');
  assert.ok(html.includes('id="adventureMapSection"'), 'adventureMapSection must exist in HTML');
  assert.ok(html.includes('id="adventureRealmsWrap"'), 'adventureRealmsWrap must exist in HTML');
  assert.ok(appJs.includes('function renderAdventureMap()'), 'renderAdventureMap must exist in app.js');
  assert.ok(appJs.includes('function applyViewMode(mode)'), 'applyViewMode must exist in app.js');
});

test('50K Upgrade: Interactive 3D Mascot Companion exists', () => {
  assert.ok(html.includes('id="mascotWidget"'), 'mascotWidget must exist in HTML');
  assert.ok(html.includes('id="mascotBubble"'), 'mascotBubble must exist in HTML');
  assert.ok(html.includes('id="mascotText"'), 'mascotText must exist in HTML');
  assert.ok(appJs.includes('function triggerMascotCheer()'), 'triggerMascotCheer must exist in app.js');
  assert.ok(appJs.includes('function resetMascotIdle()'), 'resetMascotIdle must exist in app.js');
});

test('50K Upgrade: 3D Mystery Chest Unboxing Modal exists', () => {
  assert.ok(html.includes('id="mysteryChestModal"'), 'mysteryChestModal must exist in HTML');
  assert.ok(html.includes('id="btnOpenMysteryChest"'), 'btnOpenMysteryChest must exist in HTML');
  assert.ok(html.includes('id="btnTapChest"'), 'btnTapChest must exist in HTML');
  assert.ok(html.includes('id="chestRewardBox"'), 'chestRewardBox must exist in HTML');
  assert.ok(appJs.includes('function openMysteryChest()'), 'openMysteryChest must exist in app.js');
  assert.ok(appJs.includes('function handleChestTap()'), 'handleChestTap must exist in app.js');
});

test('50K Upgrade: Cartoon Web Audio SFX Synthesizers are implemented', () => {
  assert.ok(appJs.includes('function playCartoonBoing()'), 'playCartoonBoing must be in app.js');
  assert.ok(appJs.includes('function playCartoonPop()'), 'playCartoonPop must be in app.js');
  assert.ok(appJs.includes('function playCartoonSparkle()'), 'playCartoonSparkle must be in app.js');
  assert.ok(appJs.includes('function playCartoonTadaa()'), 'playCartoonTadaa must be in app.js');
});
