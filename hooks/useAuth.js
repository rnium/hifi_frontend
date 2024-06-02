import { usePost } from "./useApi";
import { useEffect, useState } from "react";

export const useLogin = () => {
    const {data, loading, success, error, perform_post} = usePost(process.env.NEXT_PUBLIC_API_HOST + 'auth/token/login', false)
    useEffect(() => {
        console.log('data', data);
        if (data?.auth_token) {
            localStorage.setItem("hifi_user_t", data.auth_token);
        }
    }, [data])
    return {success, loading, error, login: perform_post};

}

export const useSignup = () => {
    const {data, loading, success, error, perform_post} = usePost(process.env.NEXT_PUBLIC_API_HOST + 'auth/users/', false)
    const {success:login_success, login_loading, login_error, login} = useLogin();
    const [userData, setUserData] = useState(null);
    
    const perform_signup = payload => {
        setUserData(payload);
        perform_post(payload);
    }

    useEffect(() => {
        if (success) {
            console.log('Signup success');
            login(userData);
        }
    }, [success])

    return {signup_success:success, login_success, loading, error, perform_signup};
}