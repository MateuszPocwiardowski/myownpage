export type AppContextInterface = {
	token: string
	isLoggedIn: boolean
	login: (token: string) => void
	logout: () => void
}
