const CHARACTER_URL = 'https://dragonball-api.com/api/characters';
const PLANET_URL = 'https://dragonball-api.com/api/planets';
const TRANSFORMATION_URL = 'https://dragonball-api.com/api/transformations';

/**
 * Fetches a character from the API based on the provided name.
 * @param {string} _name - The name of the character to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the character data as an object.
 */
async function fetchCharacter(_name) {
  const req = await fetch(`${CHARACTER_URL}?name=${_name}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });

  return await req.json();
}

/**
 * Fetches planet data from the API based on the provided name.
 * @param {string} _name - The name of the planet to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the planet data as an object.
 */
async function fetchPlanet(_name) {
  const req = await fetch(`${PLANET_URL}?name=${_name}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });

  return await req.json();
}

/**
 * Fetches transformation data from the API based on the provided name.
 * @param {string} _name - The name of the transformation to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the fetched transformation data.
 */
async function fetchTransformation(_name) {
  const req = await fetch(`${TRANSFORMATION_URL}?name=${_name}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });

  return await req.json();
}

module.exports = {
  fetchCharacter: fetchCharacter,
  fetchPlanet: fetchPlanet,
  fetchTransformation: fetchTransformation
};
