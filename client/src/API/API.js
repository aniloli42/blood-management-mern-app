import axios from "axios"
require("dotenv").config()

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL })

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem("profile").token
		)}`
	}
	return req
})

// user management endpoints requests
export const login = (formdata) => API.post("/auth/login", formdata)
export const signup = (formdata) => API.post("/auth/signup", formdata)
export const updateUser = (formdata, id) =>
	API.patch(`/update/user/:${id}`, formdata)
export const deleteUser = (id) => API.delete(`/delete/:${id}`)

// blood management endpoints requests
export const fetchData = (id) => API.post("/data/fetchData", id)
