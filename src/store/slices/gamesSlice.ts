import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { Platforms } from "@/types/Platforms";
import { Genres } from "@/types/Genres";
import { Sorts } from "@/types/Sorts";

interface gamesState {
  gamesListError: {}
  gamesList: []
  gameInfoError: {}
  gameInfoIsLoading: boolean
  gameInfo: {
    screenshots?: []
    minimum_system_requirements?: {}
    thumbnail?: string
    release_date?: any
    developer?: string
    publisher?: string
    genre?: string
    title?: string
    description?: string
  }
}

const initialState: gamesState = {
  gamesListError: {},
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
        .get("https://justcors.com/tl_688561e/https://www.freetogame.com/api/games")
      return data
    } catch (error) {
      return error
    }
  }
)

export const fetchGamesListWithParametres = createAsyncThunk(
  'game/getGamesListWithParametres', 
  async (params: {platform: string, genre: string, sort: string}) => {
    try {
      const { data } = await axios
        .get(`https://justcors.com/tl_688561e/https://www.freetogame.com/api/games?platform=${Platforms[params.platform as keyof typeof Platforms]}&sort-by=${Sorts[params.sort as keyof typeof Sorts]}${Genres[params.genre as keyof typeof Genres] ? `&category=${Genres[params.genre as keyof typeof Genres]}` : ''}`)
      return data
    } catch (error) {
      return error
    }
  }
)

export const fetchGameById = createAsyncThunk(
  'game/getGameById', 
  async (gameId: string) => {
    try {
      const { data } = await axios
        .get(`https://justcors.com/tl_688561e/https://www.freetogame.com/api/game?id=${gameId}`)
      return data
    } catch (error) {
      return error
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
    builder.addCase(fetchGamesList.pending, (state) => {
      state.gamesListError = {}
      state.gamesList = []
    })
    builder.addCase(fetchGamesList.fulfilled, (state, action) => {
      if (action.payload) {
        state.gamesList = action.payload
      } else {
        state.gamesListError = {'error': 'Something goes wrong!'}
      }
    })
    builder.addCase(fetchGamesList.rejected, (state, action) => {
      state.gamesListError = action.error
    })
    builder.addCase(fetchGamesListWithParametres.pending, (state) => {
      state.gamesListError = {}
      state.gamesList = []
    })
    builder.addCase(fetchGamesListWithParametres.fulfilled, (state, action) => {
      if (action.payload) {
        state.gamesList = action.payload
      } else {
        state.gamesListError = {'error': 'Something goes wrong!'}
      }
    })
    builder.addCase(fetchGamesListWithParametres.rejected, (state, action) => {
      state.gamesListError = action.error
    })
    builder.addCase(fetchGameById.pending, (state) => {
      state.gameInfo = {}
      state.gameInfoError = {}
      state.gameInfoIsLoading = true
    })
    builder.addCase(fetchGameById.fulfilled, (state, action) => {
      console.log(action.payload)
      if (action.payload.message === 'Network Error') {
        state.gameInfoError = action.payload;
      } else {
        if (action.payload) {
          state.gameInfo = action.payload
        } else {
          state.gameInfoError = {'error': 'Something goes wrong!'}
        }
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