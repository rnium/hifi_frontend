'use client'

import { createSlice } from "@reduxjs/toolkit";

const cart_localstorage_key = 'cart';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartInfo: {},
        localStorageLoaded: false,
        serverSynced: false,
        cartProductData: [],
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
    }
})

export const { 
    setCartInfo, 
    setCartProductData, 
    setServerSynced, 
    cart_localstorage_key: cart_storage_key,
    setLocalStorageLoaded
} = cartSlice.actions;
export default cartSlice.reducer;