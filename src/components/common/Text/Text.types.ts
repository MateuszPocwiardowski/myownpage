import { SxProps, Theme } from '@mui/material/styles'

export type TextProps = {
	type?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: string
	sx?: SxProps<Theme>
}
