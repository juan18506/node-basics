const { http } = require('../plugins');


const getPokemonById = async ( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  // const response = await fetch( url );
  // const pokemon = await response.json();
  const pokemon = await http.get( url );

  return pokemon.name;
}

module.exports = {
  getPokemonById,
}
