import { TextField as MaterialUiTextField } from '@mui/material'
import { TextFieldProps } from './TextField.types'

const TextField = ({ id, label, minRows, value, onChange, sx, ...props }: TextFieldProps) => {
	return (
		<MaterialUiTextField
			sx={sx}
			id={id}
			label={label}
			multiline={true}
			minRows={minRows}
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}

export default TextField
