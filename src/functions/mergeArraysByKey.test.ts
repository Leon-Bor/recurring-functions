import { mergeArraysByKey } from './mergeArraysByKey';

test('merge 2 arrays and 1 with same id', () => {
  const arr1 = [{ resourceId: '1' }, { resourceId: '2' }];
  const arr2 = [{ resourceId: '2' }, { resourceId: '3' }];

  expect(mergeArraysByKey('resourceId', arr1, arr2).length).toBe(3);
});

test('merge 2 arrays  with same id', () => {
  const arr1 = [{ resourceId: '1' }, { resourceId: '2' }];
  const arr2 = [{ resourceId: '1' }, { resourceId: '2' }];

  expect(mergeArraysByKey('resourceId', arr1, arr2).length).toBe(2);
});

test('merge 2 arrays  with no same id', () => {
  const arr1 = [{ resourceId: '1' }, { resourceId: '2' }];
  const arr2 = [{ resourceId: '31' }, { resourceId: '4' }];

  expect(mergeArraysByKey('resourceId', arr1, arr2).length).toBe(4);
});
