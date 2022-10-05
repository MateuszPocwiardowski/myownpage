import { Box } from '@mui/material'
import Input from '../Input/Input'
import styles from './AuthForm.styles'

const AuthForm = () => {
	return (
		<Box sx={styles.form} component='form'>
			<Input sx={styles.input} required id='e-mail' label='E-mail' type='e-mail' />
			<Input
				sx={styles.input}
				required
				id='password'
				label='Password'
				type='password'
				autoComplete='current-password'
			/>
		</Box>
	)
}

export default AuthForm
