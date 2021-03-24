'use strict';

/**
 * Deep copy of object or array
 * @param {Object} [obj]
 * @returns {Object}
 */
export function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

// Aliases
export const deeCop = deepCopy;
export const dc = deepCopy;
