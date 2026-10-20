// Starts each server with dummy settings (no database needed) and checks that it answers.
const { test } = require('node:test');
const assert = require('node:assert');
const { spawn } = require('node:child_process');
const path = require('node:path');

const SERVER_DIR = path.join(__dirname, '..');
const DUMMY_ENV = {
  MONGODB_URI: 'mongodb://127.0.0.1:27017/healthcare_test',
  SESSION_SECRET: 'test-session-secret',
  JWT_SECRET: 'test-jwt-secret',
  STRIPE_SECRET_KEY: 'sk_test_dummy',
  STRIPE_PUBLISHABLE_KEY: 'pk_test_dummy',
  SMTP_USER: 'test@example.com',
  SMTP_PASS: 'test',
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Start a server script and wait until it answers HTTP. Returns the response and stops the server. */
async function request(script, port, urlPath) {
  const child = spawn(process.execPath, [script], {
    cwd: SERVER_DIR,
    env: { ...process.env, ...DUMMY_ENV, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  child.stdout.on('data', (d) => (output += d));
  child.stderr.on('data', (d) => (output += d));

  try {
    for (let attempt = 0; attempt < 60; attempt++) {
      if (child.exitCode !== null) throw new Error(`${script} exited early:\n${output}`);
      try {
        const response = await fetch(`http://127.0.0.1:${port}${urlPath}`);
        return { status: response.status, body: await response.text() };
      } catch (e) {
        await sleep(500);
      }
    }
    throw new Error(`${script} never answered:\n${output}`);
  } finally {
    child.kill();
  }
}

test('the API server starts and answers (unknown routes give 404)', async () => {
  const { status } = await request('Server.js', 3100, '/nothing-here');
  assert.strictEqual(status, 404);
});

test('the video call signaling server starts', async () => {
  const { status, body } = await request('index.js', 3102, '/');
  assert.strictEqual(status, 200);
  assert.match(body, /sever is runing/);
});

test('the payment server shows the payment page with the publishable key', async () => {
  const { status, body } = await request('PaymentServer.js', 3104, '/pay');
  assert.strictEqual(status, 200);
  assert.match(body, /pk_test_dummy/);
});

test('the chatbot server serves the chat page and nothing else from its folder', async () => {
  const page = await request('chatBotServer.js', 3003, '/chatBot');
  assert.strictEqual(page.status, 200);
  assert.match(page.body, /ChatBot/);
  const source = await request('chatBotServer.js', 3003, '/chatBotServer.js');
  assert.strictEqual(source.status, 404);
});

test('the API server stops with a clear message when a setting is missing', async () => {
  const env = { ...process.env };
  delete env.MONGODB_URI;
  const child = spawn(process.execPath, ['Server.js'], { cwd: SERVER_DIR, env, stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  child.stderr.on('data', (d) => (output += d));
  const code = await new Promise((resolve) => child.on('exit', resolve));
  assert.notStrictEqual(code, 0);
  assert.match(output, /Missing environment variable MONGODB_URI/);
});