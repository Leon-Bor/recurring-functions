import { capitalizeFirstLetter } from './capitalizeFirstLetter';

test('capitalize the word test', () => {
  expect(capitalizeFirstLetter('test')).toBe('Test');
});
