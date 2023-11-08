import { deletePokemon, savePokemon } from './pokemon.actions';
import { pokemonMock } from './pokemon.mock';
import { Pokemon } from './pokemon.models';
import { store } from './store';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPokemon = createAsyncThunk('pokemon/loadPokemon', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
  return pokemonMock;
});

export const deletePokemon = createAsyncThunk('pokemon/deletePokemon', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
  return response;
});

export class PokemonService {
  
}

export const pokemonService = new PokemonService();

// TODO: hier kijken; https://redux.js.org/tutorials/essentials/part-5-async-logic