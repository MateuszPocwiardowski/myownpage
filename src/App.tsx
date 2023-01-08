import { useContext } from 'react'
import AuthContext from './store/auth-context'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import CreateArticlePage from './pages/CreateArticlePage/CreateArticlePage'

const App = () => {
	const authCtx = useContext(AuthContext)

	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				{!authCtx.isLoggedIn && (
					<Route path='/auth'>
						<AuthPage />
					</Route>
				)}
				<Route path='/profile'>
					{authCtx.isLoggedIn && <ProfilePage />}
					{!authCtx.isLoggedIn && <Redirect to='/auth' />}
				</Route>
				<Route path='/blog/new-article'>
					<CreateArticlePage />
				</Route>
				<Route path='/blog/:id'>
					<ArticlePage />
				</Route>
				<Route path='/blog'>
					<ArticlesPage />
				</Route>
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</Layout>
	)
}

export default App
