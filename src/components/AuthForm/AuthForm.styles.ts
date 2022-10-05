const styles = {
	form: {
		maxWidth: '40rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'left',
		alignItems: 'left',
		textAlign: 'left',
		p: 3,
	},
	heading: {
		fontWeight: 700,
		mb: 1,
	},
	caption: {
		mb: 1,
	},
	input: {
		width: 1,
		my: 1,
		fieldset: {
			borderRadius: 3,
			borderSize: '4px',
		},
	},
	button: {
		fontWeight: 700,
		fontSize: 20,
		my: 1,
		py: 1,
		borderRadius: 6,
	},
	link: {
		pt: 4,
		textAlign: 'center',
	},
} as const

export default styles
