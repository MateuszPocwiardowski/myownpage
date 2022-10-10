import { SxProps, Theme } from '@mui/material/styles'
import { TypographyTypeMap } from '@mui/material/Typography'

export type TextProps = {
	type?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4'
	children: string
	sx?: SxProps<Theme>
}
