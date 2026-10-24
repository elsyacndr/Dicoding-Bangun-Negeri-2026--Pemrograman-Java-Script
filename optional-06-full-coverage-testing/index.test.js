import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should add two positive numbers correctly', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('should add zero to a number', () => {
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});

test('should return 0 if the first argument is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
});

test('should return 0 if the second argument is negative', () => {
  assert.strictEqual(sum(5, -1), 0);
});

test('should return 0 if both arguments are negative', () => {
  assert.strictEqual(sum(-1, -2), 0);
});

test('should return 0 if the first argument is not a number', () => {
  assert.strictEqual(sum('2', 3), 0);
});

test('should return 0 if the second argument is not a number', () => {
  assert.strictEqual(sum(2, '3'), 0);
});

test('should return 0 if both arguments are not numbers', () => {
  assert.strictEqual(sum('2', '3'), 0);
});
