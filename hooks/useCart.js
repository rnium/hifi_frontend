'use client'

import { useEffect, useCallback } from "react";
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
    cart_storage_key 
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
        if (success) {
            dispatch(setCartProductData(data));
            const totalAmount = data.reduce((acc, curr) => {
                return acc + ((curr.priceSale || curr.price) * cartInfo[curr.id.toString()]);
            }, 0)
            const totalItems = Object.keys(cartInfo).reduce((acc, curr) => (acc + cartInfo[curr]), 0);
            dispatch(setCartTotalItems(totalItems));
            dispatch(setCartTotalAmount(totalAmount));
        }
    }, [data, success])

    return { prodData, cartInfo, totalAmount, totalItems };
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
