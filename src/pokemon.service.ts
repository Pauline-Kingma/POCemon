import { pokemonMock } from './pokemon.mock';
import { Pokemon } from './pokemon.models';

class PokemonService {
  constructor() { }

  async getPokemon(): Promise<Pokemon[]> {
    // await (delay(3000));
    return pokemonMock;
    // return new Promise((_resolve, reject) => {
    //   reject('OH NO');
    // });
  }

  async deletePokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
    // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    // console.log(response);
    return {};
  }
}

export const pokemonService = new PokemonService();

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}