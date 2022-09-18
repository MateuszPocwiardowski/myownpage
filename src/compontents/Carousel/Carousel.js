/** @jsxImportSource theme-ui */

import React from 'react'
import {
	HtmlIcon,
	CssIcon,
	MaterialUIIcon,
	ThemeUIIcon,
	JavaScriptIcon,
	ReactIcon,
	TypeScriptIcon,
	ReduxIcon,
	MobXIcon,
} from '../../assets/Icons/Icons'

const Carousel = () => {
	return (
		<div
			sx={{
				height: '100px',
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0,0,0,.4)',
				'& > img': {
					mx: '40px',
				},
			}}>
			<HtmlIcon />
			<CssIcon />
			<MaterialUIIcon />
			<ThemeUIIcon />
			<JavaScriptIcon />
			<ReactIcon />
			<TypeScriptIcon />
			<ReduxIcon />
			<MobXIcon />
		</div>
	)
}

export default Carousel
