const charCounter = require('./functions/charCounter');
const episodesLocations = require('./functions/episodesLocations');
const timeFunction = require('./functions/timeFunction');
const formatTime = require('./functions/formatTime');

/**
 * Solution to the first exercise proposed in the Rick and Morty Challenge. Already in the requested format.
 * 
 * @returns Result of the first exercise.
 */
exports.exercise1 = async () => {
    const [countResults, totalTime] = await timeFunction(async () => {
        const counters = [
            charCounter('locations', 'l'),
            charCounter('episodes', 'e'),
            charCounter('characters', 'c'),
        ];

        const results = await Promise.all(counters);

        return {
            'locations': results[0],
            'episodes': results[1],
            'characters': results[2],
        }
    });

    return {
        "exercise_name": "Char counter",
        "time": formatTime(totalTime),
        "in_time": totalTime <= 3000,
        "results": [
            {
                "char": "l",
                "count": countResults.locations,
                "resource": "locations"
            },
            {
                "char": "e",
                "count": countResults.episodes,
                "resource": "episodes"
            },
            {
                "char": "c",
                "count": countResults.characters,
                "resource": "characters"
            },
        ],
    }
};

/**
 * Solution to the second exercise proposed in the Rick and Morty Challenge. Already in the requested format.
 * 
 * @returns Result of the second exercise.
 */
exports.exercise2 = async () => {
    const [locations, totalTime] = await timeFunction(async () => await episodesLocations());

    return {
        "exercise_name": "Episode locations",
        "time": formatTime(totalTime),
        "in_time": totalTime <= 3000,
        "results": locations,
    };
};