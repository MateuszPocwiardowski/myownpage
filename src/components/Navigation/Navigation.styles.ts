const styles = {
	header: {
		width: '100%',
		height: '5rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'gray',
		padding: '0 10%',
	},
	logo: {
		color: 'white',
		fontWeight: 700,
		textTransform: 'uppercase',
		textDecoration: 'none',
	},
	logoImg: {
		fontSize: '2rem',
	},
	nav: {
		display: 'flex',
		alignItems: 'baseline',
	},
	navItems: {
		listStyle: 'none',
		display: 'flex',
		alignItems: 'baseline',
	},
	navItem: {
		textTransform: 'uppercase',
		color: 'white',
		margin: '0 1rem',
	},
	navLink: {
		color: 'white',
		fontWeight: 700,
		textDecoration: 'none',
	},
	navButton: {
		ml: '1rem',
		fontWeight: 700,
	},
} as const

export default styles
