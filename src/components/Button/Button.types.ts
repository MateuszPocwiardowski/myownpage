import { SxProps, Theme } from '@mui/material/styles'
import React, { MouseEventHandler } from 'react'

export type ButtonProps = {
	disabled?: boolean
	type: 'text' | 'contained' | 'outlined'
	color?: 'success' | 'error'
	href?: string
	children: string
	sx?: SxProps<Theme>
	onClick?: MouseEventHandler<HTMLButtonElement>
}
