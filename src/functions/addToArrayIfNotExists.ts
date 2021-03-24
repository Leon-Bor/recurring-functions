'use strict';

/**
 * add value to array if the value does not exists (no objects)
 *
 * @param {*[]} [arr]
 * @param {string | number | boolea} [obj]
 * @returns {*[]}
 */
export function addToArrayIfNotExists(arr: any[], value: string | number | boolean) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
  return arr;
}

// Aliases
export const addToArrIfNotExi = addToArrayIfNotExists;
export const ataine = addToArrayIfNotExists;
