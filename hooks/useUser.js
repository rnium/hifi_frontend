import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated, setData, setLoaded } from '@/redux/accountReducer';;
import { useGet } from './useApi';
import { useCallback, useEffect } from 'react';


export const useUserState = () => {
    const userInfo = useSelector(state => state.account.data);
    const userIsAuthenticated = useSelector(state => state.account.isAuthenticated);
    const userIsLoaded = useSelector(state => state.account.isLoaded);
    const dispatch = useDispatch();
    const setUserData = useCallback((data) => dispatch(setData(data)), [dispatch]);
    return {userInfo, userIsAuthenticated, userIsLoaded, setUserData};
}

export const useUser = () => {
    const {userInfo, userIsAuthenticated, userIsLoaded} = useUserState();
    const dispatch = useDispatch();
    const { data, loading, success, error, perform_get, reset: requestReset } = useGet(process.env.NEXT_PUBLIC_API_HOST + 'auth/users/me/', true);

    useEffect(() => {
        if (!userIsLoaded) {
            perform_get();
        }
    }, [userIsLoaded])

    useEffect(() => {
        console.log('userdata init', success, Boolean(error), loading);
        if ( !userIsLoaded && !loading && success && data) {
            dispatch(setData(data));
            dispatch(setLoaded(true));
            dispatch(setAuthenticated(true));
            requestReset();
        } else if (error) {
            console.log('Error setting userdata', error)
            dispatch(setLoaded(true));
            dispatch(setAuthenticated(false));
            requestReset();
        }
    }, [data, success, error, userIsLoaded, loading, requestReset])

    const reset = useCallback(() => {
        dispatch(setLoaded(false));
        dispatch(setAuthenticated(false));
    }, [dispatch, setData, setLoaded, setAuthenticated])
    
    return {userInfo, userIsAuthenticated, userIsLoaded, loadingUser: loading, reset};
}