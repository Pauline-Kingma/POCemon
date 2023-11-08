import { Pokemon } from './pokemon.models';

export const savePokemon = (pokemon: Pokemon[]) => {
  return {
    type: 'pokemon/savePokemon',
    payload: pokemon
  }
};

export const deletePokemon = (pokemon: Pokemon) => {
  return {
    type: 'pokemon/deletePokemon',
    payload: pokemon
  }
};
