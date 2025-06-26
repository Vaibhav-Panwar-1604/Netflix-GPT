import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name :'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeMovies:(state) =>{ 
            state.movieNames = null;
            state.movieResults = null;
        }
    }
})

export const {toggleGptSearchView ,addGptMoviesResults, removeMovies} = gptSlice.actions;
export default gptSlice.reducer;