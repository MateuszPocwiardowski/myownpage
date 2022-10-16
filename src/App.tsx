import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/auth'>
					<AuthPage />
				</Route>
				<Route path='/profile'>
					<ProfilePage />
				</Route>
			</Switch>
		</Layout>
	)
}

export default App
