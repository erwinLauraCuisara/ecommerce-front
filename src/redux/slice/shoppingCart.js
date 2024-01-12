import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCartProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.shoppingCartProducts.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.shoppingCartProducts = state.shoppingCartProducts.filter(product => product.id !== action.payload.id);
    },
  },
});

export const shoppingCartProductsState = (state) => state.shoppingCart.shoppingCartProducts;

export const { addProduct, deleteProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
