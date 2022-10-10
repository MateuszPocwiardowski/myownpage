import { SxProps, Theme } from '@mui/material/styles'
import { ChangeEventHandler } from 'react'

export type InputProps = {
	required?: boolean
	disabled?: boolean
	id: string
	label: string
	type: string
	defaultValue?: string
	autoComplete?: string
	helperText?: string
	value?: string
	sx?: SxProps<Theme>
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
