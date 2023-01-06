import { useState, useEffect, createContext, ReactNode } from 'react'
import { removeFromStorage, getFromStorage, saveInStorage } from '../utils/useStorage/useStorage'
import calculateRemaningTime from '../utils/calculateRemaningTime/index'
import { AuthContextInterface } from './store.types'

const AuthContext = createContext<AuthContextInterface>({
	token: '',
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const initialToken = getFromStorage({ key: 'token' })

	const [token, setToken] = useState(initialToken ?? '')

	useEffect(() => {
		const expirationTime = getFromStorage({ key: 'expirationTime' })

		const remainingTime = calculateRemaningTime(expirationTime ?? '')

		if (remainingTime < 0) {
			logoutHandler()
		}
	}, [])

	const logoutHandler = () => {
		setToken('')
		removeFromStorage({ key: 'token' })
		removeFromStorage({ key: 'remainingTime	' })
	}

	const loginHandler = (token: string, expirationTime: string) => {
		setToken(token)
		saveInStorage({ key: 'token', value: token })
		saveInStorage({ key: 'expirationTime', value: expirationTime })

		const remainingTime = calculateRemaningTime(expirationTime)

		setTimeout(logoutHandler, remainingTime)
	}

	const isLoggedIn = !!token

	const contextValue = {
		token,
		isLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	}

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContext
