import { SxProps, Theme } from '@mui/material/styles'
import { ChangeEventHandler } from 'react'

export type TextFieldProps = {
	required?: boolean,
	id: string
	label: string
	minRows?: number
	value?: string
	sx?: SxProps<Theme>
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
