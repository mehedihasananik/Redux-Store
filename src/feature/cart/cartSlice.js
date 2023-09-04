import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const url = "https://course-api.com/react-useReducer-cart-project"

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  isLoading: false,
}

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})




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
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action)
      state.isLoading = false;
      state.cart = action.payload
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;

    }
  }
})


export const { removeCart, removeItem, increase, decrease, totalCalculations } = cartSlice.actions

export default cartSlice.reducer