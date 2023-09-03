import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 5,
  total: 0,
  isLoading: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
})

export default cartSlice.reducer