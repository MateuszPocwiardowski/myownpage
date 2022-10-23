export type AppContextInterface = {
	token: string
	isLoggedIn: boolean
	login: (token: string, expirationTime: string) => void
	logout: () => void
}
