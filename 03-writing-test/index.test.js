import { test } from 'node:test';
import assert from 'node:assert';

import { sum } from './index.js';

test('should sum two numbers correctly', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 5), 15);
  assert.strictEqual(sum(-2, 2), 0);
});
