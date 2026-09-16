import fs from 'fs';
import test from 'node:test';
import assert from 'node:assert';

const html = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const words = JSON.parse(fs.readFileSync('data/words.json', 'utf8'));

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

test('Visual Usage Simulation: All 29 items have rich 3-step practical life guides', () => {
  assert.strictEqual(words.length, 29);
  for (const w of words) {
    assert.ok(w.usage, `Item ${w.id} must have usage metadata`);
    assert.ok(w.usage.actionBtn, `Item ${w.id} must have actionBtn`);
    assert.ok(w.usage.title, `Item ${w.id} must have title`);
    assert.ok(Array.isArray(w.usage.steps) && w.usage.steps.length === 3, `Item ${w.id} must have 3 visual steps`);
  }
});

test('Visual Usage Simulation: UI components and interactive handler exist', () => {
  assert.ok(html.includes('id="modalUsageCard"'), 'modalUsageCard must exist in index.html');
  assert.ok(html.includes('id="btnTryAction"'), 'btnTryAction must exist in index.html');
  assert.ok(html.includes('id="cameraFlashOverlay"'), 'cameraFlashOverlay must exist in index.html');
  assert.ok(appJs.includes("$('#btnTryAction')"), 'btnTryAction logic must be handled in app.js');
  assert.ok(html.includes('id="btnFloatSimulate"'), 'btnFloatSimulate must exist in index.html');
  assert.ok(html.includes('id="simulationFxOverlay"'), 'simulationFxOverlay must exist in index.html');
  assert.ok(html.includes('id="fxComicBadge"'), 'fxComicBadge must exist in index.html');
  assert.ok(appJs.includes("triggerPracticalSimulation"), 'triggerPracticalSimulation must be defined in app.js');
  assert.ok(appJs.includes('function playUsageWaterSound()'), 'playUsageWaterSound must exist in app.js');
  assert.ok(appJs.includes('function playCameraSound()'), 'playCameraSound must exist in app.js');
});

test('Exploded Disassembly & 3D Interactive Animations: Toys and Vehicles have dedicated animations', () => {
  const models = [
    { file: 'models/bike.glb', expectedAnim: 'Holobike_Loop' },
    { file: 'models/milk_truck.glb', expectedAnim: 'Exploded_Truck' },
    { file: 'models/toy_car.glb', expectedAnim: 'Exploded_Car' },
    { file: 'models/robot.glb', expectedAnim: 'Disassemble_Robot' },
    { file: 'models/astronaut.glb', expectedAnim: 'ZeroGravity_Float' },
    { file: 'models/boombox.glb', expectedAnim: 'Bass_Beat_Pulse' },
    { file: 'models/ball.glb', expectedAnim: 'Bounce_Spin' },
    { file: 'models/star.glb', expectedAnim: 'Magic_Shine_Pulse' }
  ];

  for (const m of models) {
    const buf = fs.readFileSync(m.file);
    const jsonLen = buf.readUInt32LE(12);
    const jsonStr = buf.toString("utf8", 20, 20 + jsonLen);
    const gltf = JSON.parse(jsonStr);
    assert.ok(Array.isArray(gltf.animations) && gltf.animations.length > 0, `Model ${m.file} must have animations`);
    const animNames = gltf.animations.map(a => a.name);
    assert.ok(animNames.includes(m.expectedAnim), `Model ${m.file} must include ${m.expectedAnim}, got: [${animNames.join(", ")}]`);
  }
});
