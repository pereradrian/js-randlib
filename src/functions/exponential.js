const { getRandomGenerator } = require('./seed');
const { baseGenerator } = require('./base-generator');

/**
 * Generates random samples from an exponential distribution.
 *
 * @param {number} lambda - The rate parameter (must be > 0).
 * @param {number|Array|null} [size=null] - The shape of the output:
 *   - If `null`, a single value is returned.
 *   - If a number, a 1D array of the specified size is returned.
 *   - If an array (e.g., [m, n]), a multidimensional array of the specified shape is returned.
 * @returns {number|Array} A single value, an array, or a multidimensional array of random values from the exponential distribution.
 */
function exponential(lambda, size = null) {
    if (lambda <= 0) {
        throw new Error("Rate parameter lambda must be greater than 0");
    }
    // Use the base generator for handling size
    return baseGenerator(() => -Math.log(1 - getRandomGenerator()()) / lambda, size);
}

module.exports = exponential;