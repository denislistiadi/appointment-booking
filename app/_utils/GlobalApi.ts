import axios from "axios"

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
})

const getCategory = () => axiosClient.get('categories?populate=*')

export default {
    getCategory
}