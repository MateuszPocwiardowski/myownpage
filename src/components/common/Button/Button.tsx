import { Button as MaterialUiButton } from '@mui/material'
import { ButtonProps } from './Button.types'

const Button = ({ type, children, onClick, sx, ...props }: ButtonProps) => {
	switch (type) {
		case 'contained':
			return (
				<MaterialUiButton
					variant={type}
					onClick={onClick}
					sx={{
						backgroundColor: '#fff',
						color: '#1f2028',
						padding: '0.75rem 1.5rem',
						borderRadius: '1.5rem',
						fontSize: '1rem',
						fontWeight: 700,
						textTransform: 'none',
						...sx,
					}}
					{...props}
					className='button'>
					{children}
				</MaterialUiButton>
			)

		case 'text':
			return (
				<MaterialUiButton variant={type} onClick={onClick} sx={sx} {...props} className='button'>
					{children}
				</MaterialUiButton>
			)

		case 'outlined':
			return (
				<MaterialUiButton variant={type} onClick={onClick} sx={sx} {...props} className='button'>
					{children}
				</MaterialUiButton>
			)
	}
}

export default Button
