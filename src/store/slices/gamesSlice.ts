import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { Platforms } from "@types/Platforms";
import { Genres } from "@types/Genres";
import { Sorts } from "@types/Sorts";

interface gamesState {
  gamesList: []
  gameInfoError: {}
  gameInfoIsLoading: boolean
  gameInfo: {}
}

const initialState: gamesState = {
  gamesList: [],
  gameInfoError: {},
  gameInfoIsLoading: false,
  gameInfo: {},
};

export const fetchGamesList = createAsyncThunk(
  'game/getGamesList', 
  async () => {
    try {
      const { data } = await axios
        .get("https://justcors.com/tl_02a0890/https://www.freetogame.com/api/games")
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
        .get(`https://justcors.com/tl_02a0890/https://www.freetogame.com/api/games?platform=${Platforms[params.platform as keyof typeof Platforms]}&sort-by=${Sorts[params.sort as keyof typeof Sorts]}${Genres[params.genre as keyof typeof Genres] ? `&category=${Genres[params.genre as keyof typeof Genres]}` : ''}`)
      return data
    } catch (error) {
      return console.log(error)
    }
  }
)

export const fetchGameById = createAsyncThunk(
  'game/getGameById', 
  async (gameId: string) => {
    try {
      const { data } = await axios
        .get(`https://justcors.com/tl_02a0890/https://www.freetogame.com/api/game?id=${gameId}`)
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
    setGameInfo: (state, action) => {
      state.gameInfo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGamesList.fulfilled, (state, action) => {
      state.gamesList = action.payload
    })
    builder.addCase(fetchGamesListWithParametres.fulfilled, (state, action) => {
      state.gamesList = action.payload
    })
    builder.addCase(fetchGameById.pending, (state) => {
      state.gameInfo = {}
      state.gameInfoError = {}
      state.gameInfoIsLoading = true
    })
    builder.addCase(fetchGameById.fulfilled, (state, action) => {
      if (action.payload) {
        state.gameInfo = action.payload
      } else {
        state.gameInfoError = {'error': 'Something goes wrong!'}
      }
      state.gameInfoIsLoading = false
    })
    builder.addCase(fetchGameById.rejected, (state, action) => {
      state.gameInfoError = action.error
      state.gameInfoIsLoading = false
    })
  }
});

export const { setGameInfo } = gamesSlice.actions;

export default gamesSlice.reducer;