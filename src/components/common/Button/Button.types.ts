import { MouseEventHandler } from 'react'
import { SxProps, Theme } from '@mui/material/styles'

export type ButtonProps = {
	disabled?: boolean
	type: 'text' | 'contained' | 'outlined'
	color?: 'success' | 'error'
	href?: string
	children: any
	sx?: SxProps<Theme>
	onClick?: MouseEventHandler<HTMLButtonElement>
}
