import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const postDefaultConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const usePost = (url, auth_required = false, config = postDefaultConfig) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const reset = useCallback(() => {
        setData(null);
        setLoading(false);
        setSuccess(false);
        setError(null)
    }, [url])

    const perform_post = useCallback(async payload => {
        if (auth_required && config?.headers) {
            config.headers.Authorization = `Token ${localStorage.getItem('hifi_user_t')}`
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
    return { data, loading, success, error, perform_post };
}

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
        setError(null)
    }, [apiUrl, initialData])

    const perform_get = useCallback(async (params = {}) => {
        let headers = {}
        if (auth_required) {
            headers.Authorization = `Token ${localStorage.getItem('hifi_user_t')}`
        }
        setLoading(true);
        try {
            let res = await axios.get(apiUrl, {
                params, headers
            });
            setData(res.data);
            setSuccess(true);
            setLoaded(true)
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