const styles = {
	heading: {
		fontWeight: 700,
		my: 1,
	},
	articles: {
		maxWidth: '1400px',
		margin: '0 auto',
		padding: '1rem',
	},
	article: {
		display: 'flex',
		flexDirection: 'column',
		margin: '1rem 0 2rem 0',
	},
	title: {
		marginBottom: '1rem',
	},
	entry: {
		textAlign: 'justify',
	},
	button: {
		alignSelf: 'flex-end',
		color: 'black',
		mt: '1rem',
	},
} as const

export default styles
