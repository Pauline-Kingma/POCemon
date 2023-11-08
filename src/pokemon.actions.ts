import { Pokemon } from './pokemon.models';

// Actions
export const setLoading = () => {
  return {
    type: 'pokemon/loading'
  }
};

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
