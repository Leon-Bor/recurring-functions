import { addToArrayIfNotExists } from './addToArrayIfNotExists';

test('add existing number to array', () => {
  const arr = [1, 2, 3, 4];

  expect(addToArrayIfNotExists(arr, 4)[4]).toBe(undefined);
});

test('add not existing number to array', () => {
  const arr = [1, 2, 3, 4];

  expect(addToArrayIfNotExists(arr, 5)[4]).toBe(5);
});
