import { configureStore } from '@reduxjs/toolkit';
import { Pokemon } from './pokemon.models';

const initialState = {
  pokemon: [],
  loading: false
};

// Reducer
function pokemonReducer(state = initialState, action: { type: string; payload: any; }) {
  switch (action.type) {
    case 'pokemon/loading':
      return {
        ...state,
        loading: true
      }
    case 'pokemon/savePokemon':
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    case 'pokemon/deletePokemon':
      return {
        ...state,
        pokemon: (state.pokemon as Pokemon[]).filter(pokemon => pokemon.name !== action.payload.name)
      }
    default: return state;
  }
}

export const store = configureStore({ reducer: pokemonReducer });
