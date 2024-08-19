'use client'

import { useEffect, useRef, useCallback } from "react";
import { message } from "antd";
import { usePost } from "./useApi";
import { api_endpoints } from "@/lib/data";
import { useSelector, useDispatch } from "react-redux";
import {
    setCartInfo,
    setCartProductData,
    setServerSynced,
    setLocalStorageLoaded,
    setCartTotalItems,
    setCartTotalAmount,
    cart_storage_key,
    cart_id_storage_key
} from "@/redux/cartReducer";


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
    const totalAmount = useSelector(state => state.cart.cartTotalAmount);
    const totalItems = useSelector(state => state.cart.cartTotalItems);
    const { data, perform_post, success } = usePost(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.cartproducts}`, true, postConfig, []);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorageLoaded) {
            dispatch(setCartInfo(JSON.parse(localStorage.getItem(cart_storage_key) || '{}')));
            dispatch(setLocalStorageLoaded(true));
            return;
        }
        if (localStorageLoaded && !serverSynced) {
            perform_post({
                cartid: localStorage.getItem(cart_id_storage_key),
                cartinfo: cartInfo
            });
            dispatch(setServerSynced(true));
            localStorage.setItem(cart_storage_key, JSON.stringify(cartInfo));
        }
    }, [serverSynced, localStorageLoaded])

    useEffect(() => {
        if (success) {
            if (localStorage.getItem(cart_id_storage_key) !== data.cartid) {
                localStorage.setItem(cart_id_storage_key, data.cartid)
            }
            dispatch(setCartProductData(data.prod_data));
            dispatch(setCartTotalItems(data.total_items));
            dispatch(setCartTotalAmount(data.total_amount));
        }
    }, [data, success])

    const afterOrderCleanUp = useCallback(() => {
        localStorage.removeItem(cart_id_storage_key);
        localStorage.removeItem(cart_storage_key);
        dispatch(setCartInfo({}));
        dispatch(setCartProductData([]));
        dispatch(setCartTotalItems(0));
        dispatch(setCartTotalAmount(0));
    }, [])

    return { prodData, cartInfo, totalAmount, totalItems, success, serverSynced, afterOrderCleanUp };
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

export const useRemoveFromCart = () => {
    const dispatch = useDispatch();
    const cartInfo = useSelector(state => state.cart.cartInfo);
    
    const removeProduct = useCallback((id) => {
        const id_str = id.toString();
        const cartInfoCopy = { ...cartInfo };
        delete cartInfoCopy[id_str];
        dispatch(setCartInfo(cartInfoCopy));
        dispatch(setServerSynced(false));
    }, [cartInfo])

    const decrementFromCart = useCallback((id) => {
        const id_str = id.toString();
        if (cartInfo[id_str] > 1) {
            dispatch(setCartInfo(
                {
                    ...cartInfo,
                    [id_str]: cartInfo[id_str] - 1
                }
            ))
            dispatch(setServerSynced(false));
        }
        
    }, [cartInfo])

    return {removeProduct, decrementFromCart};
}


export const useAddToCartWithMessage = () => {
    const addToCart = useAddToCart();
    return (id) => {
        addToCart(id);
        message.success('Product Added to Cart')
    }
}
