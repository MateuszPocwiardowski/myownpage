import { SxProps, Theme } from '@mui/material/styles'

export type InputProps = {
	required?: boolean
	disabled?: boolean
	id: string
	label: string
	type: string
	defaultValue?: string
	autoComplete?: string
	helperText?: string
	sx?: SxProps<Theme>
}
