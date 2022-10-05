const isObject = (value: object) => {
	const type = typeof value
	// Types of object: dates, maths, regular expressions (RegExp), arrays, functions, objects
	return !!value && (type === 'object' || type === 'function')
}

export default isObject
