import { randomNumberBetween } from './randomNumberBetween';

test('random greater number than 4', () => {
  expect(randomNumberBetween(5, 10) >= 5).toBe(true);
});

test('random small number than 11', () => {
  expect(randomNumberBetween(5, 10) <= 10).toBe(true);
});

test('number between 1 and 2', () => {
  const number = randomNumberBetween(1, 2);
  expect(number >= 1 && number <= 2).toBe(true);
});
