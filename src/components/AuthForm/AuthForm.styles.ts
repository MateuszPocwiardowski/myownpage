const styles = {
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'left',
		alignItems: 'left',
		textAlign: 'left',
		px: '10%',
		py: '10rem',
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
		color: 'black',
		textDecoration: 'none',
		my: 1,
	},
	progressContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	progress: {
		my: '10rem',
	},
	errorMessage: {
		color: 'red',
	},
} as const

export default styles
