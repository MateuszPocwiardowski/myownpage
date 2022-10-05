import AuthForm from './components/AuthForm/AuthForm'
import { saveInStorage, readFromStorage } from './utils/useStorage/useStorage'

const App = () => {
	return (
		<div>
			<AuthForm />
		</div>
	)
}

export default App
