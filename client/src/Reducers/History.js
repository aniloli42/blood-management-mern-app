const reducer = (state = [], action) => {
	switch (action.type) {
		case "GET_HISTORYS":
			return [...action.payload]

		default:
			return state
	}
}

export default reducer
