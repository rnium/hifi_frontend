'use client'

import { useState, useEffect, useCallback } from "react";
import { usePost } from "./useApi";
import { api_endpoints } from "@/lib/data";
import { useSelector, useDispatch } from "react-redux";
import { setCartInfo, setCartProductData, setServerSynced, setLocalStorageLoaded, cart_storage_key } from "@/redux/cartReducer";


const postConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const useCart = () => {
    const cartInfo = useSelector(state => state.cart.cartInfo);
    const prodData = useSelector(state => state.cart.cartProductData);
    const serverSynced = useSelector(state => state.cart.serverSynced);
    const localStorageLoaded = useSelector(state => state.cart.localStorageLoaded);
    const { data, perform_post, success } = usePost(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.cartproducts}`, true, postConfig, []);

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorageLoaded && !serverSynced) {
            perform_post(cartInfo);
            localStorage.setItem(cart_storage_key, JSON.stringify(cartInfo));
            dispatch(setServerSynced(true));
        }
    }, [serverSynced, localStorageLoaded])

    useEffect(() => {
        if (!localStorageLoaded) {
            dispatch(setCartInfo(JSON.parse(localStorage.getItem(cart_storage_key) || '{}')));
            dispatch(setLocalStorageLoaded(true));
        }
    }, [localStorageLoaded])

    useEffect(() => {
        dispatch(setCartProductData(data));
    }, [data])

    return { prodData, cartInfo };
}


export const useAddToCart = () => {
    const dispatch = useDispatch();
    const cartInfo = useSelector(state => state.cart.cartInfo);
    const addProduct = useCallback((id) => {
        let id_str = id.toString();
        dispatch(setCartInfo(
            {
                ...cartInfo,
                [id_str]: 1 + (cartInfo[id_str] ? cartInfo[id_str] : 0)
            }
        ))
        dispatch(setServerSynced(false));
    }, [cartInfo])
    return addProduct;
}

export const useRemoveCart = () => {
    const dispatch = useDispatch();
    const cartInfo = useSelector(state => state.cart.cartInfo);
    const removeProduct = useCallback((id) => {
        const id_str = id.toString();
        const cartInfoCopy = { ...cartInfo };
        delete cartInfoCopy[id_str];
        dispatch(setCartInfo(cartInfoCopy));
    }, [])
    return removeProduct;
}

