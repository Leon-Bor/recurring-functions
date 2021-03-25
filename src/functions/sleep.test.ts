import { sleep } from './sleep';

test('100B number space', async () => {
  var date = new Date().getTime();
  await sleep(1000);

  expect(new Date().getTime() - date >= 1000).toBe(true);
});
