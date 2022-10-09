import { fontWeight } from '@mui/system'

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
		fontSize: '2rem',
		color: 'white',
		fontWeight: 700,
		textDecoration: 'none',
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
} as const

export default styles
