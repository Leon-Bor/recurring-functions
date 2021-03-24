'use strict';

/**
 * Capitalize the first letter of a string / text
 *
 * Aliases: capitalizeFirstLetter, capFirLet, cfl
 *
 * Credits: https://stackoverflow.com/a/1026087
 *
 * @param {string} [string]
 * @returns {string}
 */

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Aliases
export const capFirLet = capitalizeFirstLetter;
export const cfl = capitalizeFirstLetter;
