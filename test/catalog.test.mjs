import fs from 'fs';
import test from 'node:test';
import assert from 'node:assert';

const appJs = fs.readFileSync('app.js', 'utf8');
const match = appJs.match(/const rawWords\s*=\s*(\[[\s\S]*?\]);/);
assert.ok(match, 'rawWords must exist in app.js');
const rawWords = eval(match[1]);

test('Vocabulary catalog integrity: 29 items across 5 categories', () => {
  assert.strictEqual(rawWords.length, 29);
  const categories = new Set(rawWords.map(w => w.cat));
  assert.ok(categories.has('animals'), 'Must have animals category');
  assert.ok(categories.has('food'), 'Must have food category');
  assert.ok(categories.has('toys'), 'Must have toys category');
  assert.ok(categories.has('vehicles'), 'Must have vehicles category');
  assert.ok(categories.has('objects'), 'Must have objects category');
});

test('All 29 GLB 3D models exist and have valid binary size', () => {
  for (const item of rawWords) {
    assert.ok(fs.existsSync(item.glb), `GLB missing: ${item.glb}`);
    const size = fs.statSync(item.glb).size;
    assert.ok(size > 1000, `GLB ${item.glb} is too small (${size} bytes)`);
  }
});

test('All regional audio files exist (Levels 1, 2, and 3)', () => {
  for (const item of rawWords) {
    assert.ok(fs.existsSync(item.audio), `North full audio missing: ${item.audio}`);
    assert.ok(fs.existsSync(item.audioShort), `North short audio missing: ${item.audioShort}`);
    assert.ok(fs.existsSync(item.sentenceAudio), `North sentence audio missing: ${item.sentenceAudio}`);
    assert.ok(fs.existsSync(item.centralAudio), `Central full audio missing: ${item.centralAudio}`);
    assert.ok(fs.existsSync(item.centralShortAudio), `Central short audio missing: ${item.centralShortAudio}`);
    assert.ok(fs.existsSync(item.centralSentenceAudio), `Central sentence audio missing: ${item.centralSentenceAudio}`);
    assert.ok(fs.existsSync(item.southAudio), `South full audio missing: ${item.southAudio}`);
    assert.ok(fs.existsSync(item.southShortAudio), `South short audio missing: ${item.southShortAudio}`);
    assert.ok(fs.existsSync(item.southSentenceAudio), `South sentence audio missing: ${item.southSentenceAudio}`);
    assert.ok(fs.statSync(item.audio).size > 1000);
    assert.ok(fs.statSync(item.sentenceAudio).size > 1000);
    assert.ok(fs.statSync(item.centralAudio).size > 1000);
    assert.ok(fs.statSync(item.centralSentenceAudio).size > 1000);
    assert.ok(fs.statSync(item.southAudio).size > 1000);
    assert.ok(fs.statSync(item.southSentenceAudio).size > 1000);
  }
});

test('Prompts and celebratory fanfare exist for all regional dialects', () => {
  const prompts = ['greeting', 'duck_greeting', 'correct', 'wrong', 'find_prompt', 'quiz_complete', 'praise', 'star_reward'];
  for (const p of prompts) {
    assert.ok(fs.existsSync(`audio/${p}.mp3`), `North prompt missing: ${p}`);
    assert.ok(fs.existsSync(`audio_central/${p}.mp3`), `Central prompt missing: ${p}`);
    assert.ok(fs.existsSync(`audio_south/${p}.mp3`), `South prompt missing: ${p}`);
  }
  assert.ok(fs.existsSync('audio/applause.wav'), 'North applause missing');
  assert.ok(fs.existsSync('audio_central/applause.wav'), 'Central applause missing');
  assert.ok(fs.existsSync('audio_south/applause.wav'), 'South applause missing');
});

test('All 7 animal 3D models have interactive animations', () => {
  const animalIds = ['duck', 'fish', 'fox', 'horse', 'parrot', 'flamingo', 'stork'];
  for (const id of animalIds) {
    const buf = fs.readFileSync(`models/${id}.glb`);
    const jsonLen = buf.readUInt32LE(12);
    const jsonStr = buf.toString('utf8', 20, 20 + jsonLen);
    const gltf = JSON.parse(jsonStr);
    assert.ok(Array.isArray(gltf.animations) && gltf.animations.length > 0, `Animal model ${id} must have animations`);
  }
});
