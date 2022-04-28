const axios = require("axios");

const API_URL = 'https://rickandmortyapi.com/graphql';

/**
 * Get a list of all the episodes available in the Rick and Morty API with the count and name of all the origin locations of every character that appears in it.
 * 
 * @returns List of episodes in the form requested inside the Rick and Morty Challenge notion document.
 */
const episodesLocations = async () => {
    // compute total of episodes pages
    const totalPages = 
        (await axios.post(API_URL, { query: `{episodes{info{pages}}}` })).data.data.episodes.info.pages;

    // array with each page that will be mapped into a petition on its own
    const pagesArr = [...Array(totalPages).fill(0).map((_, i) => i + 1)];

    // for each page, create a petition that will only fetch relevant data
    const petitions = pagesArr.map(p => axios.post(API_URL, { query:  `{
        episodes(page: ${p}) {
            results {
                name
                episode
                locations: characters {
                    origin {
                        name
                    }
                }
            }
        }
    }`}));

    // execute all petitions at once and wait for them all to complete, extract from the results
    // only the desired data, and transform it to have the requested format
    const episodes = (await Promise.all(petitions)).map(r => r.data.data.episodes.results).flat();
    episodes.forEach(e => {
        // keep only one name per location, and sorts them lexicographically
        e.locations = [...new Set(e.locations.map(l => l.origin.name))].sort();

        // adds an additional attribute to each episode
        e.locationsCount = e.locations.length;
    })

    return episodes;
}

module.exports = episodesLocations;