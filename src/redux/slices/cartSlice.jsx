import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  cartValue: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add Movie To Cart
    addtocart: function (state, action) {
      console.log("Add To Cart Called : ", action);

      state.cartValue.push(action.payload);
    },

    // Remove Movie From Cart
    removeFromCart: function (state, action) {
      console.log("Remove From Cart Called : ", action);

      state.cartValue = state.cartValue.filter(
        (value) => value.id !== action.payload,
      );
    },

    // Clear Complete Cart
    clearCart: function (state) {
      state.cartValue = [];
    },
  },
});

// Export actions
export const { addtocart, removeFromCart, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
