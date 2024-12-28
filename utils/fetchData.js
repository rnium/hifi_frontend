import { notFound } from "next/navigation";

export const getAPIData = async (endpoint, cache = 'default', revalidate = null) => {
  const options = {}
  // add cache in options if cache is not null
  if (cache !== null) {
    options.cache = cache;
  }
  if (revalidate !== null) {
    options.next = {
      revalidate
    }
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${endpoint}`, options);
  const res_code = res.status;
  if (res_code === 404) {
    notFound();
  } else if (!res.ok) {
    throw new Error(`${res_code} (${res.statusText})`);
  }
  return res.json();
}