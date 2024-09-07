import { usePost, api_host } from "./useApi";
import { useEffect, useState } from "react";
import { auth_endpoints, localstorage_keys } from "@/lib/data";
import { useUser } from "./useUser";

export const useLogin = () => {
    const { data, loading, success, error, perform_post } = usePost(`${api_host}${auth_endpoints.login}`, false)
    useEffect(() => {
        if (success && data?.auth_token) {
            localStorage.setItem(localstorage_keys.auth_token, data.auth_token);
        }
    }, [data, success])
    return { success, loading, error, login: perform_post };
}

export const useLogout = () => {
    const { success, error, perform_post, reset: requestReset } = usePost(`${api_host}${auth_endpoints.logout}`, true);
    const { reset } = useUser()
    useEffect(() => {
        if (success) {
            localStorage.removeItem(localstorage_keys.auth_token);
            requestReset();
            reset();
        }
    }, [success])
    return { logout: perform_post, success, error }
}

export const useSignup = () => {
    const { data, loading, success, error, perform_post } = usePost(process.env.NEXT_PUBLIC_API_HOST + 'auth/users/', false)
    const { success: login_success, login_loading, login_error, login } = useLogin();
    const [userData, setUserData] = useState(null);

    const perform_signup = payload => {
        setUserData(payload);
        perform_post(payload);
    }

    useEffect(() => {
        if (success) {
            login(userData);
        }
    }, [success])

    return { signup_success: success, login_success, loading, error, perform_signup };
}