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
							<span className='navigation__item'>
								<Link className='item__link' to='/blog' onClick={closeNavigationHandleClick}>
									Blog
								</Link>
							</span>

							{!isLoggedIn && (
								<Button sx={{ fontWeight: '700', marginTop: '1rem' }} type='contained' onClick={() => {}}>
									<Link className='item__link' to='/auth' onClick={closeNavigationHandleClick}>
										Login
									</Link>
								</Button>
							)}

							{isLoggedIn && (
								<span className='navigation__item'>
									<Link className='item__link' to='/profile' onClick={closeNavigationHandleClick}>
										Profile
									</Link>
								</span>
							)}

							{isLoggedIn && (
								<Button
									sx={{ fontWeight: '700', marginTop: '1rem' }}
									type='contained'
									onClick={() => {
										closeNavigationHandleClick()
										logout()
									}}>
									Logout
								</Button>
							)}
						</div>
					</nav>
				)}
			</div>

			<div className='header__inner'>
				<Link className='logo' to='/' onClick={closeNavigationHandleClick}>
					<Text type='h1' sx={{ textTransform: 'none', fontSize: '1.5rem', fontWeight: 400 }}>
						Mateusz Poćwiardowski
					</Text>
				</Link>

				{isMobile && <BurgerBtn onClick={onBurgerBtnHandleClick} isOpened={isOpened} />}

				{!isMobile && (
					<nav className='navigation'>
						<ul className='navigation__items'>
							{!isLoggedIn && (
								<li className='navigation__item'>
									<Link className='item__link' to='/auth'>
										Login
									</Link>
								</li>
							)}
							{isLoggedIn && (
								<li className='navigation__item'>
									<Link className='item__link' to='/profile'>
										Profile
									</Link>
								</li>
							)}
						</ul>
						{isLoggedIn && (
							<Button sx={{ marginLeft: '1rem', fontWeight: '700' }} type='contained' onClick={logout}>
								Logout
							</Button>
						)}
					</nav>
				)}
			</div>
		</header>
	)
}

export default Navigation
