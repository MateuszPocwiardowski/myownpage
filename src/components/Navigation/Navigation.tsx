import { useContext } from 'react'
import AuthContext from 'store/auth-context'
import { Link } from 'react-router-dom'
import LogoDevIcon from '@mui/icons-material/LogoDev'
import Button from 'components/common/Button/Button'
import styles from './Navigation.styles'

const Navigation = () => {
	const authCtx = useContext(AuthContext)

	const { isLoggedIn, logout } = authCtx

	return (
		<header style={styles.header}>
			<Link style={styles.logo} to='/'>
				<LogoDevIcon sx={styles.logoImg} />
			</Link>
			<nav style={styles.nav}>
				<ul style={styles.navItems}>
					{!isLoggedIn && (
						<li style={styles.navItem}>
							<Link style={styles.navLink} to='/auth'>
								Login
							</Link>
						</li>
					)}
					{isLoggedIn && (
						<li style={styles.navItem}>
							<Link style={styles.navLink} to='/profile'>
								Profile
							</Link>
						</li>
					)}
				</ul>
				{isLoggedIn && (
					<Button sx={styles.navButton} type='contained' onClick={logout}>
						Logout
					</Button>
				)}
			</nav>
		</header>
	)
}

export default Navigation
