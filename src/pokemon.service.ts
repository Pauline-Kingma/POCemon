import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonMock } from './pokemon.mock';
import { Pokemon } from './pokemon.models';

export const loadPokemon = createAsyncThunk('pokemon/loadPokemon', async () => {
  // await (delay(3000));
  return pokemonMock;
});

export const deletePokemon = createAsyncThunk('pokemon/deletePokemon', async (pokemon: Pokemon) => {
  console.log(pokemon.name);
  // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
  // console.log(response);
  return {};
});

// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }