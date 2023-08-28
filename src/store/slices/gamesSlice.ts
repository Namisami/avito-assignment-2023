import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

interface gamesState {
  value: []
}

const initialState: gamesState = {
  value: []
};

export const fetchGamesList = createAsyncThunk('game/getGamesList', async () => {
  try {
    const { data } = await axios
      .get("https://justcors.com/tl_0c96217/https://www.freetogame.com/api/games")
    return data
  } catch (error) {
    return console.log(error)
  }
})

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGamesList.fulfilled, (state, action) => {
      state.value = action.payload
    })
  }
});

// export const { fetchGames } = gamesSlice.actions;

export default gamesSlice.reducer;