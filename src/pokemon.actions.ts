import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pokemon } from './pokemon.models';
import { pokemonService } from './pokemon.service';

export const loadPokemon = createAsyncThunk<Pokemon[], void, { state: any }>('pokemon/loadPokemon', async () => {
  return pokemonService.getPokemon();
});

export const deletePokemon = createAsyncThunk('pokemon/deletePokemon', async (pokemon: Pokemon) => {
  return pokemonService.deletePokemon(pokemon);
});

