import { ThemeProvider, createTheme } from '@mui/material/styles'
import { TextField as MaterialUiTextField } from '@mui/material'
import { TextFieldProps } from './TextField.types'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

const TextField = ({ id, label, minRows, value, onChange, sx, ...props }: TextFieldProps) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<MaterialUiTextField
				sx={{ zIndex: 0, ...sx }}
				id={id}
				label={label}
				multiline={true}
				minRows={minRows}
				value={value}
				onChange={onChange}
				{...props}
			/>
		</ThemeProvider>
	)
}

export default TextField
