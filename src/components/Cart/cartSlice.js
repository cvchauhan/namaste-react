import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartData: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const index = state.cartData.findIndex((data) => {
        return data.id == action.payload.id;
      });
      if (index >= 0) {
        state.cartData[index].quantity += 1;
      } else {
        state.cartData.push(action.payload);
      }
    },
    removetoCart: (state, action) => {
      state.cartData = state.cartData.filter((data) => {
        return data.id !== action.payload;
      });
    },
    calculatePrice: (state) => {},
  },
});
export const { addtoCart, removetoCart } = cartSlice.actions;
export default cartSlice.reducer;
