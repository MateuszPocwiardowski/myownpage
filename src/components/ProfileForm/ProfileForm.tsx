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

import styles from './ProfileForm.styles'

const ProfileForm = () => {
	const history = useHistory()

	const [isLoading, setIsLoading] = useState(false)
	const [password, setPassword] = useState('')
	const [errorPassword, setErrorPassword] = useState('')

	const authCtx = useContext(AuthContext)
	const { token } = authCtx

	const onChangePasswordHandler = (event: any) => {
		setPassword(event?.target?.value)
	}

	const submitHandler = (event: any) => {
		event?.preventDefault()

		setIsLoading(true)
		setErrorPassword('')

		fetch(URLS.updatePassword, {
			method: 'POST',
			body: JSON.stringify({
				idToken: token,
				password: password,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => {
			setIsLoading(false)

			if (res.ok) {
				setPassword('')

				res.json().then(data => {
					const { idToken, expiresIn } = data

					const expirationTime = new Date(new Date().getTime() + expiresIn * 1000)
					const expirationTimeISOString = expirationTime.toISOString()

					authCtx.login(idToken, expirationTimeISOString)
				})

				history.replace('/')
			} else {
				res.json().then(data => {
					const error = data?.error?.message
					console.log(data)

					switch (error) {
						case ERRORS.weakPassword: {
							const errorMessage = capitalizeFirstLetter(error.slice(error.lastIndexOf(':') + 1))
							setErrorPassword(errorMessage)
							break
						}
						case ERRORS.invalidIdToken:
						case ERRORS.tokenExpired: {
							const errorMessage = capitalizeFirstLetter(codeToText(error).toLowerCase())
							setErrorPassword(errorMessage)
							break
						}
					}
				})
			}
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
				Change password
			</Text>
			<Text sx={styles.caption}>Lorem ipsum dolor sit amet.</Text>
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
			<Button sx={styles.button} type='contained' onClick={submitHandler}>
				Change password
			</Button>
		</Box>
	)
}

export default ProfileForm
