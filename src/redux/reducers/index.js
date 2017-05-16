const initialState = {
	sauce : '',
	sauces : ['Franks', 'Sriracha', 'Tobasco'],
	paymentInfo : {}
}

export default (state = initialState, action ) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case 'SET_SAUCE':
			newState.sauce = action.sauce
			break

		case 'SEND_PAYMENT':
			newState.paymentInfo = action.paymentInfo
			break

		default:
			return state
	}

	return newState
}