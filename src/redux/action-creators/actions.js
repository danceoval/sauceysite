export const setSauce = sauce => {
	return {
		type: 'SET_SAUCE',
		sauce
	}
}

export const sendPayment = paymentInfo => {
	return {
		type: 'SEND_PAYMENT',
		paymentInfo
	}
}