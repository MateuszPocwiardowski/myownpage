import { TextField as MaterialUiInput } from '@mui/material'
import { InputProps } from './Input.types'

const Input = ({ id, label, type, sx, ...props }: InputProps) => {
	return <MaterialUiInput sx={sx} id={id} label={label} type={type} {...props} />
}

export default Input
