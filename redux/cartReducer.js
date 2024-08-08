'use client'

import { createSlice } from "@reduxjs/toolkit";

export const cart_storage_key = 'cart';
export const cart_id_storage_key = 'cart_id';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartInfo: {},
        localStorageLoaded: false,
        serverSynced: false,
        cartProductData: [],
        cartTotalItems: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        setCartInfo: (state, action) => {
            state.cartInfo = action.payload;
        },
        setCartProductData: (state, action) => {
            state.cartProductData = action.payload;
        },
        setServerSynced: (state, action) => {
            state.serverSynced = action.payload;
        },
        setLocalStorageLoaded: (state, action) => {
            state.localStorageLoaded = action.payload;
        },
        setCartTotalItems: (state, action) => {
            state.cartTotalItems = action.payload;
        },
        setCartTotalAmount: (state, action) => {
            state.cartTotalAmount = action.payload;
        },
    }
})

export const { 
    setCartInfo,
    setCartProductData, 
    setServerSynced, 
    setLocalStorageLoaded,
    setCartTotalAmount,
    setCartTotalItems
} = cartSlice.actions;
export default cartSlice.reducer;