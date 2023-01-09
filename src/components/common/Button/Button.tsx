import { Button as MaterialUiButton } from '@mui/material'
import { NONAME } from 'dns'
import { ButtonProps } from './Button.types'

const Button = ({ type, children, onClick, sx, ...props }: ButtonProps) => {
	switch (type) {
		case 'contained':
			return (
				<MaterialUiButton
					variant={type}
					onClick={onClick}
					sx={{
						backgroundColor: '#2e3039',
						color: '#e6e9ee',
						padding: '0.75rem 1.5rem',
						borderRadius: '1.5rem',
						fontSize: '1rem',
						fontWeight: 400,
						textTransform: 'none',
						fontFamily: 'Montserrat, sans-serif',
						...sx,
					}}
					{...props}>
					{children}
				</MaterialUiButton>
			)

		case 'text':
			return (
				<MaterialUiButton
					sx={{
						color: '#2e3039',
						padding: '0.75rem 1.5rem',
						fontSize: '1rem',
						fontWeight: 400,
						textTransform: 'none',
						fontFamily: 'Montserrat, sans-serif',
						...sx,
					}}
					variant={type}
					onClick={onClick}
					{...props}>
					{children}
				</MaterialUiButton>
			)

		case 'outlined':
			return (
				<MaterialUiButton variant={type} onClick={onClick} sx={sx} {...props}>
					{children}
				</MaterialUiButton>
			)
	}
}

export default Button
