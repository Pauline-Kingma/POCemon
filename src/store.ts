import { Pokemon } from './pokemon.models';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPokemon = createAsyncThunk('pokemon/loadPokemon', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
  return pokemonMock;
});

export const deletePokemon = createAsyncThunk('pokemon/deletePokemon', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
  return respone;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: [],
    loading: false
  },
  reducers: {},
  extraReducers (builder) {
    builder.addCase(loadPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload;
      state.loading = false;
    }),
    builder.addCase(loadPokemon.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(deletePokemon.fulfilled, (state, action) => {
      state.pokemon = (state.pokemon as Pokemon[]).filter(pokemon => pokemon.name !== action.meta.arg.name)
    })
  }
});

export const store = configureStore({
  reducer: pokemonSlice.reducer
});
