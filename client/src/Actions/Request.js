import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const setOwnRequest = () => async (dispatch) => {
	try {
		const { data } = await api.getOwnRequest()

		const { request } = await data

		dispatch({ type: "SET_OWN_REQUEST", payload: request })
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const setOtherRequest = () => async (dispatch) => {
	try {
		const { data } = await api.getOtherRequest()

		const { request } = await data

		dispatch({ type: "SET_OTHER_REQUEST", payload: request })
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const setRecentRequest = () => async (dispatch) => {
	try {
		const { data } = await api.getRecentRequest()

		const { request } = await data

		dispatch({ type: "SET_RECENT_REQUEST", payload: request })
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const createRequest = (formData, func) => async (dispatch) => {
	try {
		const { data } = await api.createRequest(formData)

		const { message } = await data

		func()
		dispatch(setOwnRequest())
		dispatch(displayMessage(message))
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const updateRequest = (formData, id, func) => async (dispatch) => {
	try {
		const { data } = await api.updateRequest(formData, id)

		const { message } = await data

		func()
		dispatch(setOwnRequest())
		dispatch(displayMessage(message))
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}
export const deleteRequest = (id) => async (dispatch) => {
	try {
		const { data } = await api.deleteRequest(id)

		const { message } = await data

		dispatch(displayMessage(message))
		dispatch(setOwnRequest())
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}
