/**
 * Convert a runtime duration into a proper string representation, as requested in the Rick and Morty Challenge notion page.
 * 
 * @param {long} ms - The time in milliseconds to be formatted.
 * @returns {string} A string representation of the time passed as and argument. E.g. "2s 123ms".
 */
const formatTime = (ms) => 
    `${Math.floor(ms / 1000)}s ${ms % 1000}ms`;

module.exports = formatTime;