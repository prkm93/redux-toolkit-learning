import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defer } from "react-router-dom";

export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
});

const productSlice = createSlice({
    name: 'products',
    initialState: { data: [], fetchStatus: '' },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = 'success'
        })
        .addCase(fetchAllProducts.pending, (state) => {
            state.fetchStatus = 'loading'
        })
        .addCase(fetchAllProducts.rejected, (state) => {
            state.fetchStatus = 'error'
        })

    }
})

export default productSlice;