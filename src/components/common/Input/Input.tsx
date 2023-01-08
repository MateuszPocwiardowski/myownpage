import { ThemeProvider, createTheme } from '@mui/material/styles'
import { TextField as MaterialUiInput } from '@mui/material'
import { InputProps } from './Input.types'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

const Input = ({ id, label, type, value, onChange, sx, ...props }: InputProps) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<MaterialUiInput
				sx={{ zIndex: 0, ...sx }}
				id={id}
				label={label}
				type={type}
				value={value}
				onChange={onChange}
				{...props}
			/>
		</ThemeProvider>
	)
}

export default Input
