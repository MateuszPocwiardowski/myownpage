import { Typography as MaterialUiText } from '@mui/material'
import { TextProps } from './Text.types'

const Text = ({ type, children, sx }: TextProps) => {
	return (
		<MaterialUiText
			variant={type}
			sx={{
				color: '#2e3039',
				fontSize: '1rem',
				fontWeight: 400,
				textTransform: 'none',
				fontFamily: 'Montserrat, sans-serif',
				...sx,
			}}>
			{children}
		</MaterialUiText>
	)
}

export default Text
