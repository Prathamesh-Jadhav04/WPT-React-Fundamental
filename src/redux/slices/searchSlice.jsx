import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  movieName: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMovie: function (state, action) {
      console.log("Search Movie Called : ", action);
    },
  },
});

// Export actions
export const { searchMovie } = searchSlice.actions;

// Export reducer
export default searchSlice.reducer;
