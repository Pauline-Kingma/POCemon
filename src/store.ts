import { configureStore } from '@reduxjs/toolkit';
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

const initialState = {
    pokemon: []
};

function pokemonReducer(state = initialState, action: { type: string; payload: any; }) {
    if (action.type === 'pokemon/savePokemon') {
        return {
            ...state,
            pokemon: action.payload
        };
    } else if (action.type === 'pokemon/deletePokemon') {
        return {
            ...state,
            pokemon: (state.pokemon as Pokemon[]).filter(pokemon => pokemon.name !== action.payload.name)
        };
    }
    return state;
}

export const store = configureStore({ reducer: pokemonReducer });
