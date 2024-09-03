'use client'

import { useEffect, useCallback } from "react";
import { message } from "antd";
import { useGet, usePost } from "./useApi";
import { api_endpoints } from "@/lib/data";
import { useSelector, useDispatch } from "react-redux";

import { localstorage_keys } from "@/lib/data";

const {
    wishlistid: wishlistid_key, 
} = localstorage_keys

import {
    setProductIds,
    setProducts,
    setInitiated,
    setServerSynced,
    setLoading
} from '@/redux/wishlistReducer'


export const useWishList = () => {
    const productIds = useSelector(state => state.wishlist.productIds); // List of product ids
    const products = useSelector(state => state.wishlist.products); // List of products
    const initiated = useSelector(state => state.wishlist.initiated);
    const loading = useSelector(state => state.wishlist.loading);
    const serverSynced = useSelector(state => state.wishlist.serverSynced);
    const { data: synced_data, perform_post, success: sync_success, error } = usePost(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.sync_wishlist}`, true);
    const {data: init_data, success: init_success, perform_get: initiate} = useGet(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.initiate_wishlist}`, true)

    const dispatch = useDispatch();

    useEffect(() => {
        const wl_id = localStorage.getItem(wishlistid_key);
        if (!initiated && !loading) {
            dispatch(setLoading(true));
            initiate({id: wl_id})
            return;
        }
        if (initiated && !serverSynced && !loading) {
            dispatch(setLoading(true));
            perform_post({
                id: wl_id,
                products: productIds
            });
        }
    }, [serverSynced, initiated, productIds, loading])
    

    useEffect(() => {
        if (init_success && init_data) {
            dispatch(setInitiated(true));
            dispatch(setServerSynced(true));
            dispatch(setLoading(false));
            if (localStorage.getItem(wishlistid_key) !== init_data.id) {
                localStorage.setItem(wishlistid_key, init_data.id);
            }
            const prod_id_data = init_data.products.map(prod => prod.id);
            dispatch(setProducts(init_data.products));
            dispatch(setProductIds(prod_id_data));
        }
    }, [init_data, init_success])

    useEffect(() => {
        if (sync_success && synced_data) {
            dispatch(setServerSynced(true));
            dispatch(setLoading(false));
            const prod_id_data = synced_data.products.map(prod => prod.id);
            dispatch(setProducts(synced_data.products));
            dispatch(setProductIds(prod_id_data));
        }
    }, [synced_data, sync_success])

    return { products, init_success, sync_success, loading, serverSynced };
}


export const useAddToWishList = () => {
    const dispatch = useDispatch();
    const productIds = useSelector(state => state.wishlist.productIds);
    const addProduct = useCallback((id) => {
        dispatch(setProductIds([...productIds, id]))
        dispatch(setServerSynced(false));
    }, [productIds])
    return addProduct;
}

export const useRemoveFromWishlist = () => {
    const dispatch = useDispatch();
    const productIds = useSelector(state => state.wishlist.productIds);

    const removeProduct = useCallback((id) => {
        const products_updated = productIds.filter(i => i !== id);
        dispatch(setProductIds(products_updated));
        dispatch(setServerSynced(false));
    }, [productIds])

    return removeProduct;
}


export const useAddToWishlistWithMessage = () => {
    const addToWList = useAddToWishList();
    return (id) => {
        addToWList(id);
        message.success('Product Added to Wishlist');
    }
}
