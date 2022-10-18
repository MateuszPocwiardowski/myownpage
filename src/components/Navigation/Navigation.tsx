import { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import Button from '../common/Button/Button'
import { Link } from 'react-router-dom'
import styles from './Navigation.styles'

const Navigation = () => {
	const authCtx = useContext(AuthContext)

	return (
		<header style={styles.header}>
			<Link style={styles.logo} to='/'>
				<div>App</div>
			</Link>
			<nav style={styles.nav}>
				<ul style={styles.navItems}>
					{!authCtx.isLoggedIn && (
						<li style={styles.navItem}>
							<Link style={styles.navLink} to='/auth'>
								Login
							</Link>
						</li>
					)}
					{authCtx.isLoggedIn && (
						<li style={styles.navItem}>
							<Link style={styles.navLink} to='/profile'>
								Profile
							</Link>
						</li>
					)}
				</ul>
				{authCtx.isLoggedIn && (
					<Button sx={styles.navButton} type='contained' onClick={authCtx.logout}>
						Logout
					</Button>
				)}
			</nav>
		</header>
	)
}

export default Navigation
