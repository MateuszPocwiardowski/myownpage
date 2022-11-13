const styles = {
	form: {
		maxWidth: '600px',
		margin: '0 auto',
		padding: '1rem',

		'@media (min-width: 600px)': {
			margin: '5rem auto',
		},
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
		width: '100%',
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
