import { TextField as MaterialUiInput } from '@mui/material'
import { InputProps } from './Input.types'

const Input = ({ id, label, type, value, onChange, sx, ...props }: InputProps) => {
	return <MaterialUiInput sx={sx} id={id} label={label} type={type} value={value} onChange={onChange} {...props} />
}

export default Input
