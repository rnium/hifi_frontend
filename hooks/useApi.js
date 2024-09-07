import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { localstorage_keys } from "@/lib/data";

const postDefaultConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const api_host = process.env.NEXT_PUBLIC_API_HOST;


export const useGet = (url, auth_required = false, initialData = null) => {
    const [apiUrl, setApiUrl] = useState(url);
    const [data, setData] = useState(initialData);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const reset = useCallback(() => {
        setData(initialData);
        setLoading(false);
        setSuccess(false);
        setLoaded(false);
        setError(null);
    }, [apiUrl, initialData])

    const perform_get = useCallback(async (params = {}) => {
        let headers = {}
        if ( localStorage.getItem(localstorage_keys.auth_token) && auth_required) {
            headers.Authorization = `Token ${localStorage.getItem(localstorage_keys.auth_token)}`
        } else if (headers?.Authorization) {
            delete headers.Authorization;
        }
        setLoading(true);
        try {
            let res = await axios.get(apiUrl, {
                params, headers
            });
            setData(res.data);
            setSuccess(true);
            setLoaded(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error?.response?.data ? error?.response?.data : "Error Occured");
        } finally {
            setLoading(false);
        }
    }, [apiUrl])
    
    return { data, loading, loaded, success, error, perform_get, reset, apiUrl, setApiUrl };
}


export const usePost = (url, auth_required = false, config = postDefaultConfig, initialData=null) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const reset = useCallback(() => {
        setData(initialData);
        setLoading(false);
        setSuccess(false);
        setError(null);
    }, [url])

    const perform_post = useCallback(async payload => {
        if ( localStorage.getItem(localstorage_keys.auth_token) && auth_required && config?.headers) {
            config.headers.Authorization = `Token ${localStorage.getItem(localstorage_keys.auth_token)}`
        } else if (config?.headers?.Authorization) {
            delete config.headers.Authorization;
        }
        setLoading(true);
        try {
            let res = await axios.post(url, payload, config);
            setData(res.data);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    }, [url])
    return { data, loading, success, setSuccess, error, perform_post, reset };
}


export const usePut = (url, auth_required = false, config = postDefaultConfig, initialData=null) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const reset = useCallback(() => {
        setData(initialData);
        setLoading(false);
        setSuccess(false);
        setError(null);
    }, [url])

    const perform_post = useCallback(async payload => {
        if ( localStorage.getItem(localstorage_keys.auth_token) && auth_required && config?.headers) {
            config.headers.Authorization = `Token ${localStorage.getItem(localstorage_keys.auth_token)}`
        } else if (config?.headers?.Authorization) {
            delete config.headers.Authorization;
        }
        setLoading(true);
        try {
            let res = await axios.put(url, payload, config);
            setData(res.data);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    }, [url])
    return { data, loading, success, setSuccess, error, perform_update: perform_post, reset };
}
