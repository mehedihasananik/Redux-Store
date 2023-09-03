import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cart: cartItems,
  amount: 5,
  total: 0,
  isLoading: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCart: (state) => {
      state.cart = []
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cart.find(item => item.id === itemId);
      cartItem.amount += 1
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cart.find(item => item.id === itemId);
      cartItem.amount -= 1
    }
  }
})


export const { removeCart, increase, decrease } = cartSlice.actions

export default cartSlice.reducer