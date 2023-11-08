import { savePokemon } from './pokemon.actions';
import { pokemonMock } from './pokemon.mock';
import { store } from './store';

export class PokemonService {
    async loadPokemon(): Promise<void> {
        // Angular Service
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=12';
        const response = await fetch(url);
        // Effect: no error
        if (response.ok) {
            console.log(await response.json());
            // getPokemonSuccess
            store.dispatch(savePokemon(pokemonMock));
        } else {
            // Effect: catchError()
            // getPokemonFail()
        }
    }
}

export const pokemonService = new PokemonService();