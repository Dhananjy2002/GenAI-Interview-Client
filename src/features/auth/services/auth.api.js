import axios from "axios";
import { API_BASE_URL } from "../../../../utils/constants";



const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true

})

export async function registerUser({ username, email, password }) {
    try {
        const response = await api.post(`/auth/register`, {
            username,
            email,
            password
        })
        return response.data



    } catch (error) {
        console.log(error)


    }
}

export async function loginUser({ email, password }) {
    try {
        const response = await api.post(`/auth/login`, {
            email,
            password
        })
        return response.data



    } catch (error) {
        console.log(error)

    }
}

export async function logoutUser() {
    try {
        const response = await api.post(`/auth/logout`, {}, {
            withCredentials: true
        })
        return response.data



    } catch (error) {
        console.log(error)


    }
}

export async function getMe() {
    try {
        const response = await api.get(`/auth/get-me`, {
            withCredentials: true
        })
        return response.data



    } catch (error) {
        console.log(error)


    }
}