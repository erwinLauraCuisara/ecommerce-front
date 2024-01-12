// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import shoppingCartReducer from './slice/shoppingCart';

const store = configureStore({
  reducer: {
    products: productReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export default store;