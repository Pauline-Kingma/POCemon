import { deletePokemon, savePokemon } from './pokemon.actions';
import { pokemonMock } from './pokemon.mock';
import { Pokemon } from './pokemon.models';
import { store } from './store';

export class PokemonService {
  async loadPokemon(): Promise<void> {
    // Angular Service
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=12';
    const response = await fetch(url);
    // Effect: no error
    if (response.ok) {
      await delay(1000);
      console.log(await response.json());
      // getPokemonSuccess
      store.dispatch(savePokemon(pokemonMock));
    } else {
      // Effect: catchError()
      // getPokemonFail()
    }
  }

  async deletePokemon(pokemon: Pokemon): Promise<void> {
     // Angular Service
     const url = 'https://pokeapi.co/api/v2/pokemon?limit=12';
     const response = await fetch(url);
     // Effect: no error
     if (response.ok) {
       console.log(await response.json());
       // getPokemonSuccess
       store.dispatch(deletePokemon(pokemon));
      } else {
       // Effect: catchError()
       // getPokemonFail()
     }
  }
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const pokemonService = new PokemonService();