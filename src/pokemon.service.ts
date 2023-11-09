import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonMock } from './pokemon.mock';

export const loadPokemon = createAsyncThunk('pokemon/loadPokemon', async () => {
  // await (delay(3000));
  return pokemonMock;
});

export const deletePokemon = createAsyncThunk('pokemon/deletePokemon', async (pokemon) => {
  console.log(pokemon);
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
  return response;
});

// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }