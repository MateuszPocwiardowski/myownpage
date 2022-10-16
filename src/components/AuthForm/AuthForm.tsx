import { useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import Input from '../common/Input/Input'
import Text from '../common/Text/Text'
import Button from '../common/Button/Button'
import styles from './AuthForm.styles'

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfrimPassword] = useState('')

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

		// validation

		setIsLoading(true)
		if (isLogin) {
			console.log({ email, password })
		} else {
			console.log({ email, password, confirmPassword })

			fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI', {
				method: 'POST',
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(res => {
				setIsLoading(false)
				if (res.ok) {
					setEmail('')
					setPassword('')
					setConfrimPassword('')
				} else {
					res.json().then(data => {
						let errorMessage = 'Authentication failed'
						if (data?.error?.message) {
							errorMessage = data?.error?.message
						}
					})
				}
			})
		}
	}

	if (isLoading) {
		return <CircularProgress />
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
