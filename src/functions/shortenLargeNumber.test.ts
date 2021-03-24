import { shortenLargeNumber } from './shortenLargeNumber';

test('13 number', () => {
  expect(shortenLargeNumber(13)).toBe('13');
});

test('100k number', () => {
  expect(shortenLargeNumber(100000)).toBe('100K');
});

test('37k number', () => {
  expect(shortenLargeNumber(37010)).toBe('37K');
});

test('9.4k number', () => {
  expect(shortenLargeNumber(9400)).toBe('9.4K');
});

test('1M number', () => {
  expect(shortenLargeNumber(1000000)).toBe('1M');
});

test('1.1M number', () => {
  expect(shortenLargeNumber(1100000)).toBe('1.1M');
});
test('10.1M number', () => {
  expect(shortenLargeNumber(10100000)).toBe('10.1M');
});

test('100M number', () => {
  expect(shortenLargeNumber(100000000)).toBe('100M');
});

test('1B number', () => {
  expect(shortenLargeNumber(1000000000)).toBe('1B');
});

test('1B number space', () => {
  expect(shortenLargeNumber(1000000000, true)).toBe('1 B');
});

test('100B number space', () => {
  expect(shortenLargeNumber(100000000000, true)).toBe('100 B');
});
