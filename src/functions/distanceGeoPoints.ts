'use strict';

/**
 * This routine calculates the distance between two points (given the
 * latitude/longitude of those points). It is being used to calculate
 * the distance between two locations using GeoDataSource (TM) products
 *
 *  unit:  'M' is statute miles (default)
 *         'K' is kilometers
 *         'N' is nautical miles
 *
 * Credits: https://stackoverflow.com/a/60465578
 *
 * @param {number} [lat1]
 * @param {number} [lon1]
 * @param {number} [lat2]
 * @param {number} [lon2]
 * @param {'M' | 'K' | 'N'} [unit]
 * @returns {number} number in miles (M) ,kilometers (K) or nautical miles (N)
 */
function distanceGeoPoints(lat1: number, lon1: number, lat2: number, lon2: number, unit: 'M' | 'K' | 'N') {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

// Aliases
export const disGeoPoi = distanceGeoPoints;
export const dgp = distanceGeoPoints;
