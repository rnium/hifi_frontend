import { usePost } from "./useApi";
import { useEffect, useState } from "react";

export const useLogin = () => {
    const [success, setSuccess] = useState(false);
    const [data, loading, error, postnow] = usePost(process.env.NEXT_PUBLIC_API_HOST + 'auth/token/login', false)
    return {success, loading, error, login: postnow};

}