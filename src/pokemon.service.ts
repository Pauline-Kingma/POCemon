import { pokemonMock } from './pokemon.mock';
import { Pokemon } from './pokemon.models';

export class PokemonService {
    async loadPokemon(): Promise<Pokemon[]> {
        return pokemonMock;
    }
}

export const pokemonService = new PokemonService();