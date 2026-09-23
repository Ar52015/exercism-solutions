// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let shipNo = 1000 + Math.floor(Math.random() * (9999 - 1000 + 1));
  return `NCC-${shipNo}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random() * 1000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let classArray = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  let i = Math.floor(Math.random() * 10);
  return classArray[i];
}
