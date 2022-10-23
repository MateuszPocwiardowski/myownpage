const calculateRemaningTime = (expirationTime: string) => {
	const currentTime = new Date().getTime()
	const adjExpirationTime = new Date(expirationTime).getTime()

	const remainingDuration = adjExpirationTime - currentTime

	console.log({ currentTime, adjExpirationTime, remainingDuration })

	return remainingDuration
}

export default calculateRemaningTime
