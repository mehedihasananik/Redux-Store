import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cart: cartItems,
  amount: 0,
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
    removeItem: (state, action) => {
      let itemId = action.payload;
      state.cart = state.cart.filter(item => item.id !== itemId)
    }
    ,
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cart.find(item => item.id === itemId);
      cartItem.amount += 1
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cart.find(item => item.id === itemId);
      cartItem.amount -= 1
    },
    totalCalculations: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price
      });
      state.amount = amount
      state.total = total;
    }
  }
})


export const { removeCart, removeItem, increase, decrease, totalCalculations } = cartSlice.actions

export default cartSlice.reducer