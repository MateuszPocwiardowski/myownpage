export type AuthContextInterface = {
	token: string
	isLoggedIn: boolean
	login: (token: string, expirationTime: string) => void
	logout: () => void
}

export type UIContextInterface = {}
