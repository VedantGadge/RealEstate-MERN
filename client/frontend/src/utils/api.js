import axios from 'axios' //A popular HTTP client library for making API requests
import dayjs from 'dayjs' //A lightweight date manipulation library
import { toast } from 'react-toastify' //A toast notification library for React

export const api = axios.create({
    baseURL: "http://localhost:8000/api"
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd", { timeout: 10 * 1000 });

        if(response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("Something went wrong")
        throw error
    }
}