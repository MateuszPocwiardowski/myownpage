import { useState, createContext, ReactNode } from 'react'
import { AppContextInterface } from './auth-context.types'

const AuthContext = createContext<AppContextInterface>({
	token: '',
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [token, setToken] = useState('')

	const loginHandler = (token: string) => {
		setToken(token)
	}

	const logoutHandler = () => {
		setToken('')
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
