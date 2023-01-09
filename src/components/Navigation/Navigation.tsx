import { useState, useEffect, useContext } from 'react'
import AuthContext from 'store/auth-context'
import { Link } from 'react-router-dom'
import Text from 'components/common/Text/Text'
import Button from 'components/common/Button/Button'
import BurgerBtn from 'components/common/BurgerBtn/BurgerBtn'
import './Navigation.scss'

const Navigation = () => {
	const authCtx = useContext(AuthContext)
	const { isLoggedIn, logout } = authCtx

	const [isOpened, setIsOpened] = useState(false)
	const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })

	const isMobile = windowSize.width <= 768

	const onBurgerBtnHandleClick = () => {
		setIsOpened(prevState => !prevState)
	}

	const closeNavigationHandleClick = () => {
		setIsOpened(false)
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ height: window.innerHeight, width: window.innerWidth })
			setIsOpened(false)
		}
		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<header className='header'>
			<div className={isOpened ? 'header__outer header__outer--opened' : 'header__outer header__outer--closed'}>
				{isMobile && isOpened && (
					<nav className='navigation'>
						<div className='navigation__items'>
							<Button type='text' onClick={closeNavigationHandleClick}>
								<Link to='/blog'>Blog</Link>
							</Button>

							{!isLoggedIn && (
								<Button type='contained' onClick={closeNavigationHandleClick}>
									<Link to='/auth'>Login</Link>
								</Button>
							)}

							{isLoggedIn && (
								<>
									<Button type='text' onClick={closeNavigationHandleClick}>
										<Link to='/profile'>Profile</Link>
									</Button>

									<Button
										type='contained'
										onClick={() => {
											closeNavigationHandleClick()
											logout()
										}}>
										Logout
									</Button>
								</>
							)}
						</div>
					</nav>
				)}
			</div>

			<div className='header__inner'>
				<Link className='logo' to='/' onClick={closeNavigationHandleClick}>
					<Text type='h1' sx={{ fontSize: '1.5rem' }}>
						Mateusz Poćwiardowski
					</Text>
				</Link>

				{isMobile && <BurgerBtn onClick={onBurgerBtnHandleClick} isOpened={isOpened} />}

				{!isMobile && (
					<nav className='navigation'>
						<ul className='navigation__items'>
							<Button type='text' onClick={closeNavigationHandleClick}>
								<Link to='/blog'>Blog</Link>
							</Button>

							{!isLoggedIn && (
								<Button type='contained' onClick={closeNavigationHandleClick}>
									<Link to='/auth'>Login</Link>
								</Button>
							)}

							{isLoggedIn && (
								<>
									<Button type='text' onClick={closeNavigationHandleClick}>
										<Link to='/profile'>Profile</Link>
									</Button>

									<Button
										type='contained'
										onClick={() => {
											closeNavigationHandleClick()
											logout()
										}}>
										Logout
									</Button>
								</>
							)}
						</ul>
					</nav>
				)}
			</div>
		</header>
	)
}

export default Navigation
