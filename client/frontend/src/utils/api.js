import axios from 'axios' //A popular HTTP client library for making API requests
import dayjs from 'dayjs' //A lightweight date manipulation library
import { toast } from 'react-toastify' //A toast notification library for React

export const api = axios.create({
    baseURL: "https://real-estate-mern-theta.vercel.app/api"
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd", { timeout: 10 * 1000 });

        if (response.status === 400 || response.status === 500) {
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("Something went wrong")
        throw error
    }
}

export const getProperty = async (id) => {
    try {
        const response = await api.get(`/residency/${id}`, { timeout: 10 * 1000 });

        if (response.status === 400 || response.status === 500) {
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("Something went wrong")
        throw error
    }
}

export const createUser = async (email, token) => {
    try {
        await api.post(`/user/register`, { email }, {
            headers:
                { Authorization: `Bearer ${token}` }
        })
    } catch (error) {
        toast.error("Something went wrong, Please try again")
        throw error
    }
}

export const bookVisit = async (date, propertyId, email, token) => {

    try {

        await api.post(
            `/user/bookVisit/${propertyId}`,
            {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YYYY")
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )

    } catch (err) {
        toast.error("Something went wrong, Please try again.")
        throw err
    }
}

export const removeBooking = async (id, email, token) => {
    try {

        await api.post(
            `/user/cancelBooking/${id}`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (err) {
        toast.error("Something went wrong, Please try again");
        throw err
    }
}

export const toFav = async (id, email, token) => {
    try {
        await api.post(
            `user/toFavourites/${id}`,

            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (err) {
        throw err
    }
}

export const getAllFav = async (email, token) => {
    if (!token) return
    try {

        const res = await api.post(
            `/user/allFavourites`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        return res.data["favResidenciesID"]
    } catch (err) {
        toast.err("Something went wrong while fetching favourites")
        throw err
    }
}

export const getAllBookings = async (email, token) => {
     
        if (!token) return
        try {
    
            const res = await api.post(
                `/user/allBookings`,
                {
                    email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
    
            return res.data["bookedVisits"]
    } catch (err) { 
        toast.err("Something went wrong while fetching bookings")
        throw err
    }
}

export const createResidency= async (data,token)=>{
    try{
        const res = await api.post(
            `/residency/create`,
            {
                data
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

    }catch (err) {
  toast.error("Failed to create residency. Please try again.");
  throw err;
}
}