import { httpClient } from '../plugins';

export const getPokemonById = async ( id: number ): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  // const response = await fetch( url );
  // const pokemon = await response.json();
  const pokemon = await httpClient.get( url );

  return pokemon.name;
}
