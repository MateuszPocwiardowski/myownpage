import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
import { Box, CircularProgress } from '@mui/material'
import Input from '../common/Input/Input'
import Text from '../common/Text/Text'
import Button from '../common/Button/Button'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import codeToText from 'utils/codeToText'

import styles from './AuthForm.styles'

const AuthForm = () => {
	const history = useHistory()

	const [isLogin, setIsLogin] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfrimPassword] = useState('')

	const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')

	const authCtx = useContext(AuthContext)

	const changeFormTypeHandler = () => {
		setIsLogin(prevState => !prevState)
	}

	const onChangeEmailHandler = (event: any) => {
		setEmail(event?.target?.value)
	}

	const onChangePasswordHandler = (event: any) => {
		setPassword(event?.target?.value)
	}

	const onChangeConfirmPasswordHandler = (event: any) => {
		setConfrimPassword(event?.target?.value)
	}

	const submitHandler = (event: any) => {
		event?.preventDefault()

		if (!isLogin && password !== confirmPassword) {
			setErrorPassword('Passwords should be the same')
			return
		}

		setIsLoading(true)
		setErrorEmail('')
		setErrorPassword('')

		const url = isLogin
			? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI'
			: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI'

		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				setIsLoading(false)

				if (res.ok) {
					setEmail('')
					setPassword('')
					setConfrimPassword('')
					return res.json()
				} else {
					res.json().then(data => {
						const error = data?.error?.message
						console.log(data)

						switch (error) {
							case 'INVALID_EMAIL':
							case 'EMAIL_EXISTS':
							case 'MISSING_EMAIL': {
								const errorMessage = capitalizeFirstLetter(codeToText(error).toLowerCase())
								setErrorEmail(errorMessage)
								break
							}

							case 'WEAK_PASSWORD : Password should be at least 6 characters': {
								const errorMessage = capitalizeFirstLetter(error.slice(error.lastIndexOf(':') + 1))
								setErrorPassword(errorMessage)
								break
							}

							case 'INVALID_PASSWORD':
							case 'MISSING_PASSWORD': {
								const errorMessage = capitalizeFirstLetter(codeToText(error).toLowerCase())
								setErrorPassword(errorMessage)
								break
							}

							default: {
								setErrorEmail('Invalid e-mail or password')
								setErrorPassword('Invalid e-mail or password')
							}
						}
					})
				}
			})
			.then(data => {
				const expirationTime = new Date(new Date().getTime() + data?.expiresIn * 1000)
				const expirationTimeISOString = expirationTime.toISOString()

				authCtx.login(data?.idToken, expirationTimeISOString)

				history.replace('/')
			})
	}

	if (isLoading) {
		return (
			<div style={styles.progressContainer}>
				<CircularProgress sx={styles.progress} size={80} thickness={3} />
			</div>
		)
	}

	return (
		<Box sx={styles.form} component='form'>
			<Text type='h4' sx={styles.heading}>
				{isLogin ? 'Login' : 'Register'}
			</Text>
			<Text sx={styles.caption}>{isLogin ? 'Lorem ipsum dolor sit amet.' : 'Lorem ipsum dolor sit amet.'}</Text>
			<Input
				sx={styles.input}
				required
				id='e-mail'
				label='E-mail'
				type='e-mail'
				value={email}
				onChange={onChangeEmailHandler}
			/>
			<Text sx={styles.errorMessage}>{errorEmail}</Text>
			<Input
				sx={styles.input}
				required
				id='password'
				label='Password'
				type='password'
				autoComplete='current-password'
				value={password}
				onChange={onChangePasswordHandler}
			/>
			<Text sx={styles.errorMessage}>{errorPassword}</Text>
			{!isLogin && (
				<Input
					sx={styles.input}
					required
					id='password-confirmation'
					label='Confirm password'
					type='password'
					autoComplete='current-password'
					value={confirmPassword}
					onChange={onChangeConfirmPasswordHandler}
				/>
			)}
			<Button sx={styles.button} type='contained' onClick={submitHandler}>
				{isLogin ? 'Login' : 'Register'}
			</Button>
			<Button sx={styles.link} type='text' onClick={changeFormTypeHandler}>
				{isLogin ? 'Create new account' : 'Login to exisiting account'}
			</Button>
		</Box>
	)
}

export default AuthForm
