import { Typography as MaterialUiText } from '@mui/material'
import { TextProps } from './Text.types'

const Text = ({ type, children, sx }: TextProps) => {
	return (
		<MaterialUiText variant={type} sx={sx}>
			{children}
		</MaterialUiText>
	)
}

export default Text
