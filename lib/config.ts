import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 40000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`
  }
});

export const fetcher = async (url: string) => {
  const res = await instance.get(url);
    if (!res.data) {
        throw Error(res.data.message);
    }
    return res.data;
};

export default instance;