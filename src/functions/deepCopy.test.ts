import { deepCopy } from './deepCopy';

test('deep copy prop exists', () => {
  expect(deepCopy({ a: 1 }).a).toBe(1);
});
