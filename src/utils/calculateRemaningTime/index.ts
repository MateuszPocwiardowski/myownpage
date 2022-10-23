const calculateRemaningTime = (expirationTime: string) => {
	const currentTime = new Date().getTime()
	const adjExpirationTime = new Date(expirationTime).getTime()

	return adjExpirationTime - currentTime
}

export default calculateRemaningTime
