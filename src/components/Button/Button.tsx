import { Button as MaterialUiButton } from '@mui/material'
import { ButtonProps } from './Button.types'

const Button = ({ type, ...props }: ButtonProps) => {
	return <MaterialUiButton variant={type} {...props} />
}

export default Button
