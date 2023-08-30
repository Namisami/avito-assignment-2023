import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { Platforms } from "@types/Platforms";
import { Genres } from "@types/Genres";
import { Sorts } from "@types/Sorts";

interface gamesState {
  value: []
}

const initialState: gamesState = {
  value: []
};

export const fetchGamesList = createAsyncThunk(
  'game/getGamesList', 
  async () => {
    try {
      const { data } = await axios
        .get("https://justcors.com/tl_52bfee5/https://www.freetogame.com/api/games")
      return data
    } catch (error) {
      return console.log(error)
    }
  }
)

export const fetchGamesListWithParametres = createAsyncThunk(
  'game/getGamesListWithParametres', 
  async (params: {platform: string, genre: string, sort: string}) => {
    try {
      const { data } = await axios
        .get(`https://justcors.com/tl_52bfee5/https://www.freetogame.com/api/games?platform=${Platforms[params.platform as keyof typeof Platforms]}&sort-by=${Sorts[params.sort as keyof typeof Sorts]}${Genres[params.genre as keyof typeof Genres] ? `&category=${Genres[params.genre as keyof typeof Genres]}` : ''}`)
      return data
    } catch (error) {
      return console.log(error)
    }
  }
)

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGamesList.fulfilled, (state, action) => {
      state.value = action.payload
    })
    builder.addCase(fetchGamesListWithParametres.fulfilled, (state, action) => {
      state.value = action.payload
    })
  }
});

// export const { fetchGames } = gamesSlice.actions;

export default gamesSlice.reducer;