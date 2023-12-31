import { configureStore, createSlice } from '@reduxjs/toolkit';
import { deletePokemon, loadPokemon } from './pokemon.actions';
import { Pokemon } from './pokemon.models';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: [] as Pokemon[],
    loading: false,
    error: false
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
    builder.addCase(loadPokemon.rejected, (state) => {
      state.loading = false;
      state.error = true;
    }),
    builder.addCase(deletePokemon.fulfilled, (state, action) => {    
      state.pokemon = (state.pokemon as Pokemon[]).filter(pokemon => pokemon.id !== (action.meta.arg as unknown as Pokemon).id)
    })
  }
});

export const store = configureStore({
  reducer: pokemonSlice.reducer
});
