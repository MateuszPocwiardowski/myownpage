import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import styles from './Navigation.styles'

const NavItems = [
	{
		type: 'link',
		path: '/auth',
		name: 'Login',
	},
	{
		type: 'link',
		path: '/profile',
		name: 'Profile',
	},
	{
		type: 'button',
		path: '',
		name: 'Logout',
	},
]

const Navigation = () => {
	return (
		<header style={styles.header}>
			<Link to='/'>
				<div style={styles.logo}>React Auth</div>
			</Link>
			<nav>
				<ul style={styles.navItems}>
					{NavItems.map(item => {
						if (item?.type === 'link') {
							return (
								<li style={styles.navItem}>
									<Link to={item?.path}>{item?.name}</Link>
								</li>
							)
						} else if (item?.type === 'button') {
							return <Button type='contained'>{item?.name}</Button>
						}
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Navigation
