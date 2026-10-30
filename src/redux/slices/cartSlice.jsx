import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  cartValue: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: function (state, action) {
          console.log("Add To Cart Called : ", action);
          state.cartValue.push(action.payload)
    },

    removeFromCart: function (state, action) {
      console.log("Remove From Cart Called : ", action);
    },
  },
});

// Export actions
export const { addtocart, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
