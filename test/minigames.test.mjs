import fs from 'fs';
import test from 'node:test';
import assert from 'node:assert';

const html = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

test('Mini-Games Suite: All 6 game modals exist in index.html', () => {
  const modals = [
    'quizModal',
    'shadowModal',
    'memoryModal',
    'basketModal',
    'whackModal',
    'flashcardModal'
  ];
  for (const m of modals) {
    assert.ok(html.includes(`id="${m}"`), `Modal missing: ${m}`);
  }
});

test('Mini-Games Suite: All 6 launch buttons exist in index.html', () => {
  const buttons = [
    'startQuiz',
    'startShadowGame',
    'startMemoryGame',
    'startBasketGame',
    'startWhackGame',
    'startCinemaGame'
  ];
  for (const b of buttons) {
    assert.ok(html.includes(`id="${b}"`), `Launch button missing: ${b}`);
  }
});

test('Mini-Games Suite: All 6 game functions are implemented in app.js', () => {
  const functions = [
    'function startQuiz',
    'function startShadowGame',
    'function openMemoryGame',
    'function openBasketGame',
    'function openWhackGame',
    'function openFlashcardMode'
  ];
  for (const f of functions) {
    assert.ok(appJs.includes(f), `Function missing in app.js: ${f}`);
  }
});

test('Mini-Games Suite: All game states are initialized in state object', () => {
  assert.ok(appJs.includes('quiz: {'), 'quiz state missing');
  assert.ok(appJs.includes('shadow: {'), 'shadow state missing');
  assert.ok(appJs.includes('memory: {'), 'memory state missing');
  assert.ok(appJs.includes('basket: {'), 'basket state missing');
  assert.ok(appJs.includes('whack: {'), 'whack state missing');
  assert.ok(appJs.includes('flashcardIndex:'), 'flashcardIndex missing');
});

test('Mini-Games Suite: All modals have close buttons with cleanup support', () => {
  assert.ok(appJs.includes("if (id === 'whackModal')"), 'whackModal cleanup missing');
  assert.ok(appJs.includes("if (id === 'flashcardModal')"), 'flashcardModal cleanup missing');
  assert.ok(appJs.includes("if (id === 'quizModal')"), 'quizModal cleanup missing');
  assert.ok(appJs.includes("if (id === 'memoryModal')"), 'memoryModal cleanup missing');
});
