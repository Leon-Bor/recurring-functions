'use strict';

/**
 * get a random number between 2 numbers
 *
 * Aliases: randomNumberBetween, radNumBet, rnb
 *
 * @param { number } [min]
 * @param { number } [max]
 * @returns {number}
 */
export function randomNumberBetween(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // @ts-ignore
  return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
}

// Aliases
export const radNumBet = randomNumberBetween;
export const rnb = randomNumberBetween;
