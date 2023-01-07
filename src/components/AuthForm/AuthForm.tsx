import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from 'store/auth-context'
import { Box, CircularProgress } from '@mui/material'
import Input from 'components/common/Input/Input'
import Text from 'components/common/Text/Text'
import Button from 'components/common/Button/Button'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import codeToText from 'utils/codeToText'
import { URLS, ERRORS } from 'constants/index'
import './AuthForm.scss'

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

		fetch(isLogin ? URLS.signIn : URLS.signUp, {
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
							case ERRORS.invalidEmail:
							case ERRORS.emailExists:
							case ERRORS.missingEmail: {
								const errorMessage = capitalizeFirstLetter(codeToText(error).toLowerCase())
								setErrorEmail(errorMessage)
								break
							}

							case ERRORS.weakPassword: {
								const errorMessage = capitalizeFirstLetter(error.slice(error.lastIndexOf(':') + 1))
								setErrorPassword(errorMessage)
								break
							}

							case ERRORS.invalidPassword:
							case ERRORS.missingPassword: {
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
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<CircularProgress sx={{ marginY: '10rem' }} size={80} thickness={3} />
			</div>
		)
	}

	return (
		<Box className='form' component='form'>
			<Text type='h4' sx={{ fontSize: '2rem', fontWeight: 400, marginBottom: '1rem', color: '#fff' }}>
				{isLogin ? 'Login' : 'Register'}
			</Text>
			<Text sx={{ marginBottom: '1rem', color: '#fff' }}>
				{isLogin ? 'Lorem ipsum dolor sit amet.' : 'Lorem ipsum dolor sit amet.'}
			</Text>
			<Input
				sx={{
					width: '100%',
					backgroundColor: '#fff',
					borderColor: '1f2028',
					borderRadius: '3rem',
					color: '#1f2028',

					fieldset: {
						legend: {
							span: {
								color: '#fff',
							},
						},
					},
				}}
				required
				id='e-mail'
				label='E-mail'
				type='e-mail'
				value={email}
				onChange={onChangeEmailHandler}
			/>
			<Text sx={{ color: 'red' }}>{errorEmail}</Text>
			<Input
				sx={{
					width: '100%',
					backgroundColor: '#fff',
					borderColor: '1f2028',
					borderRadius: '3rem',
					color: '#1f2028',

					fieldset: {
						legend: {
							span: {
								color: '#fff',
							},
						},
					},
				}}
				required
				id='password'
				label='Password'
				type='password'
				autoComplete='current-password'
				value={password}
				onChange={onChangePasswordHandler}
			/>
			<Text sx={{ color: 'red' }}>{errorPassword}</Text>
			{!isLogin && (
				<Input
					sx={{
						width: '100%',
						backgroundColor: '#fff',
						borderColor: '1f2028',
						borderRadius: '3rem',
						color: '#1f2028',

						fieldset: {
							legend: {
								span: {
									color: '#fff',
								},
							},
						},
					}}
					required
					id='password-confirmation'
					label='Confirm password'
					type='password'
					autoComplete='current-password'
					value={confirmPassword}
					onChange={onChangeConfirmPasswordHandler}
				/>
			)}
			<Button type='contained' onClick={submitHandler}>
				{isLogin ? 'Login' : 'Register'}
			</Button>
			<Button sx={{ color: '#fff', textDecoration: 'none' }} type='text' onClick={changeFormTypeHandler}>
				{isLogin ? 'Create new account' : 'Login to exisiting account'}
			</Button>
		</Box>
	)
}

export default AuthForm
