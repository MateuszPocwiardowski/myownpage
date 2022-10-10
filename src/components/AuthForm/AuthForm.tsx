import { useState } from 'react'
import { Box } from '@mui/material'
import Input from '../common/Input/Input'
import Text from '../common/Text/Text'
import Button from '../common/Button/Button'
import styles from './AuthForm.styles'

const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onChangeEmailHandler = (event: any) => {
		setEmail(event?.target?.value)
	}

	const onChangePasswordHandler = (event: any) => {
		setPassword(event?.target?.value)
	}

	const submitHandler = () => {
		setEmail('')
		setPassword('')
		console.log({ email, password })
	}

	return (
		<Box sx={styles.form} component='form'>
			<Text type='h4' sx={styles.heading}>
				Login
			</Text>
			<Text sx={styles.caption}>Lorem ipsum dolor sit amet.</Text>
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
			<Button sx={styles.button} type='contained' onClick={submitHandler}>
				Login
			</Button>
		</Box>
	)
}

export default AuthForm
