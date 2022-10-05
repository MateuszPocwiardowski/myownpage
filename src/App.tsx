import AuthForm from './components/AuthForm/AuthForm'
import { saveInStorage, readFromStorage } from './utils/useStorage/useStorage'

const App = () => {
	return (
		<div className='App'>
			<AuthForm />
		</div>
	)
}

export default App
