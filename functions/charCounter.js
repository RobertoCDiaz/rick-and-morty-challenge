const axios = require("axios");

const API_URL = 'https://rickandmortyapi.com/graphql';

/**
 * Count the number of times a character appears inside of the names of any resource's items of the Rick and Morty API.
 * 
 * @param {string} resource - Name of the resource. 'characters', 'locations', and 'episodes' are the only valid resources.
 * @param {string} char - Character whose occurrences count we want to look up in the specified resource.
 * @returns {int} Total count of ocurrences.
 */
const charCounter = async (resource, char) => {
    // compute total of pages of the query result
    const totalPages = (await axios.post(API_URL, { query: `{
        list:${resource}(filter: {name: "${char}"}) {
            info {
                pages
            }
        }
    }` })).data.data.list.info.pages;

    // for each page, create a petition fetching only the names of each item
    const pagesArr = [...Array(totalPages).fill(0).map((_, i) => i + 1)];
    const petitions = pagesArr.map(p => axios.post(API_URL, { query: `{
        list:${resource}(page: ${p}, filter: {name: "${char}"}){
            results {
                name
            }
        }
    }` }));

    // execute all petitions and transform the results into an array of items names
    const items = (await Promise.all(petitions)).map(result => result.data.data.list.results.map(r => r.name)).flat();

    // count ocurrences of the char inside the names
    const ocurrences = items.reduce((a, b) => a + b.toLowerCase().split(char.toLowerCase()).length - 1, 0);

    return ocurrences;
}

module.exports = charCounter;