'use client'
import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        productIds: [],
        products: [],
        initiated: false,
        serverSynced: false,
        loading: false
    },
    reducers: {
        setProductIds: (state, action) => {
            state.productIds = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setServerSynced: (state, action) => {
            if (state !== action.payload) {
                state.serverSynced = action.payload;
            }
        },
        setInitiated: (state, action) => {
            state.initiated = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { 
    setProductIds,
    setProducts,
    setServerSynced,
    setInitiated,
    setLoading
} = wishlistSlice.actions;
export default wishlistSlice.reducer;