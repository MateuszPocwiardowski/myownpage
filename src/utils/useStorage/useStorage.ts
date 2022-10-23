import isObject from '../isObject'

const saveInStorage = ({ key, value }: { key: string; value: any }) => {
	window.localStorage.setItem(key, isObject(value) ? JSON.stringify(value) : value)
}

const getFromStorage = ({ key }: { key: string }) => {
	return window.localStorage.getItem(key)
}

const removeFromStorage = ({ key }: { key: string }) => {
	window.localStorage.removeItem(key)
}

export { saveInStorage, getFromStorage, removeFromStorage }
