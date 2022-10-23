import { useState, createContext, ReactNode } from 'react'
import { removeFromStorage, getFromStorage, saveInStorage } from '../utils/useStorage/useStorage'
import calculateRemaningTime from '../utils/calculateRemaningTime/index'
import { AppContextInterface } from './auth-context.types'

const AuthContext = createContext<AppContextInterface>({
	token: '',
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const initialToken = getFromStorage({ key: 'token' })

	const [token, setToken] = useState(initialToken ?? '')

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
