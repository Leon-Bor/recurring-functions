'use strict';

/**
 * removes items from dom by class name
 * (property).
 * @param {string} [className]
 */
export function removeElementsByClass(className: string) {
  var elements = (document as any).getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

// Aliases
export const remEleByCla = removeElementsByClass;
export const rebc = removeElementsByClass;
