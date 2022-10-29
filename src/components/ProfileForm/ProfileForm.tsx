import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from 'store/auth-context'
import { Box, CircularProgress } from '@mui/material'
import Input from 'components/common/Input/Input'
import Text from 'components/common/Text/Text'
import Button from 'components/common/Button/Button'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import codeToText from 'utils/codeToText'

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

		const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD_nVdW4TVKn-OX42lys2Pak3ayW2hubFI'

		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				idToken: token,
				password: password,
				returnSecureToken: false,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => {
			setIsLoading(false)

			if (res.ok) {
				setPassword('')

				history.replace('/')
			} else {
				res.json().then(data => {
					const error = data?.error?.message
					console.log(data)

					switch (error) {
						case 'WEAK_PASSWORD : Password should be at least 6 characters': {
							const errorMessage = capitalizeFirstLetter(error.slice(error.lastIndexOf(':') + 1))
							setErrorPassword(errorMessage)
							break
						}
						case 'INVALID_ID_TOKEN':
						case 'TOKEN_EXPIRED': {
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
