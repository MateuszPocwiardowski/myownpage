import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import { AuthContextProvider } from './store/auth-context'
import { UIContextProvider } from './store/ui-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<AuthContextProvider>
		<UIContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UIContextProvider>
	</AuthContextProvider>
)
