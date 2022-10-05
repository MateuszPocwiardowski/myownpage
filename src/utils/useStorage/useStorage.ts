import isObject from '../isObject'

const saveInStorage = (key: string, value: any) => {
	window.localStorage.setItem(key, isObject(value) ? JSON.stringify(value) : value)
}

const readFromStorage = (key: string) => {
	return window.localStorage.getItem(key)
}

export { saveInStorage, readFromStorage }
