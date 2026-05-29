import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { MovieProps } from "../../Components/MovieCard/MovieCardProps.types";

type MoviesState = {
  query: string;
  moviesList: MovieProps[];
  error: string | null;
  loading: boolean;
};

const initialState: MoviesState = {
  query: "",
  moviesList: [],
  error: null,
  loading: false,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=2cf3419&s=` +
          encodeURIComponent(query),
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const movies = await response.json();

      if (movies.Response === "False") {
        return rejectWithValue(movies.Error);
      }
      return movies.Search;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  },
);

const moviesSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    resetMovies: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    (builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.moviesList = action.payload;
      }));
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setQuery, resetMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
