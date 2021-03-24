import { distanceGeoPoints } from './distanceGeoPoints';

test('test kilometer distance', () => {
  expect(distanceGeoPoints(59.3293371, 13.4877472, 59.3225525, 13.4619422, 'K')).toBe(1.6467140606313462);
});

test('test miles distance', () => {
  expect(distanceGeoPoints(59.3293371, 13.4877472, 59.3225525, 13.4619422, 'M')).toBe(1.023220679128481);
});

test('test nautical miles distance', () => {
  expect(distanceGeoPoints(59.3293371, 13.4877472, 59.3225525, 13.4619422, 'N')).toBe(0.8885648377551729);
});
