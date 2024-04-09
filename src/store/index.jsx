import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from "./slices/songsSlice.jsx";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice.jsx";
import { reset } from "./actions.jsx";

const store = configureStore({
    reducer: {
            songs: songsReducer,
            movies: moviesReducer
        }
});

export { store, addSong, removeSong, addMovie, removeMovie, reset};