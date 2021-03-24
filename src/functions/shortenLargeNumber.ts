'use strict';

/**
 * Shorten large number like youtube views
 *
 * @param {number} [num]
 * @param {string} [separator]  choose what to use as dot
 * @param {boolean} [space] add space after number
 * @returns {string}
 */
export const shortenLargeNumber = (num: number, space: boolean = false, separator: string = '.') => {
  let shortNum: string = '';
  if (Math.abs(num) < 999) {
    shortNum = Math.sign(num) * Math.abs(num) + '';
  } else if (Math.abs(num) > 999 && Math.abs(num) < 99999) {
    // @ts-ignore
    // eg. 35.1K
    shortNum = `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}${space ? ' ' : ''}K`;
  } else if (Math.abs(num) > 99999 && Math.abs(num) < 999999) {
    // @ts-ignore
    // eg. 200K
    shortNum = `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(0)}${space ? ' ' : ''}K`;
  } else if (Math.abs(num) > 999999 && Math.abs(num) < 99999999) {
    // @ts-ignore
    // eg. 2.2M
    shortNum = `${Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1)}${space ? ' ' : ''}M`;
  } else if (Math.abs(num) > 99999999 && Math.abs(num) < 999999999) {
    // @ts-ignore
    // eg. 250M
    shortNum = `${Math.sign(num) * (Math.abs(num) / 1000000).toFixed(0)}${space ? ' ' : ''}M`;
  } else if (Math.abs(num) > 999999999 && Math.abs(num) < 99999999999) {
    // @ts-ignore
    // eg. 2.2B
    shortNum = `${Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1)}${space ? ' ' : ''}B`;
  } else if (Math.abs(num) > 99999999999) {
    // @ts-ignore
    // eg. 200B
    shortNum = `${Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(0)}${space ? ' ' : ''}B`;
  }
  return shortNum.replace(/\./g, separator);
};

// Aliases
export const shoLarNum = shortenLargeNumber;
export const sln = shortenLargeNumber;
