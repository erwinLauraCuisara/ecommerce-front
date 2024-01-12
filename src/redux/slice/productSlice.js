import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../api/query';
import { baseApiUri } from '../../constants/api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  console.log(`${baseApiUri}/products`);
  const response = await get(`${baseApiUri}/products`);
  if (!response.ok) {
    throw new Error('Error al obtener productos');
  }
  return response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

export default productSlice.reducer;