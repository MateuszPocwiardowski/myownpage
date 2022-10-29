export const URLS = {
	signIn:
		'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI',
	signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI',
	updatePassword:
		'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI',
}

export const ERRORS = {
	invalidEmail: 'INVALID_EMAIL',
	emailExists: 'EMAIL_EXISTS',
	missingEmail: 'MISSING_EMAIL',
	invalidPassword: 'INVALID_PASSWORD',
	missingPassword: 'MISSING_PASSWORD',
	weakPassword: 'WEAK_PASSWORD : Password should be at least 6 characters',
	invalidIdToken: 'INVALID_ID_TOKEN',
	tokenExpired: 'TOKEN_EXPIRED',
}
