export const getAPIData = async (endpoint, cache = 'default') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${endpoint}`, {cache: cache});
    const res_code = res.status;
    if (!res.ok) {
      throw new Error(`${res_code} (${res.statusText})`);
    }
    return res.json();
  }