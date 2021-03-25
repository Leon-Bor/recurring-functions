'use strict';

/**
 * Function for testing e.g. loading time in a async function
 *
 * Aliases: sleep, sle, s
 *
 * @param {number} [ms] miliseconds
 * @returns {Promise}
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Aliases
export const sle = sleep;
export const s = sleep;
