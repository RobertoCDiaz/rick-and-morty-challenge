/**
 * Compute the time it takes a function to execute from start to finish.
 * 
 * @param {function} f - Function to be timed.
 * @returns {array} An array to be deconstructed in which the first element corresponds to the function's ouput (if something is returned) and the second element is the time it took the function to execute in milliseconds.
 */
const timeFunction = async (f) => {
    const startTime = performance.now();

    const functionResult = await f();

    const totalTime = performance.now() - startTime;

    return [functionResult, totalTime];
}

module.exports = timeFunction;