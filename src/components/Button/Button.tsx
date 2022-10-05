import { Button as MaterialUiButton } from '@mui/material'
import { ButtonProps } from './Button.types'

const Button = ({ type, children, onClick, sx, ...props }: ButtonProps) => {
	return (
		<MaterialUiButton variant={type} onClick={onClick} sx={sx} {...props}>
			{children}
		</MaterialUiButton>
	)
}

export default Button
