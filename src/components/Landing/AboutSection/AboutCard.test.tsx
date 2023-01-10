import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CodeIcon from '@mui/icons-material/Code'
import AboutCard from './AboutCard'

describe('AboutCard', () => {
	beforeEach(() => {
		render(<AboutCard icon={<CodeIcon />} title='Simple title' message='Simple message' />)
	})

	it('should render card with proper icon', () => {
		expect(screen.getByTestId('CodeIcon')).toBeInTheDocument()
	})

	it('should render card with proper title', () => {
		expect(screen.getByText('Simple title')).toBeInTheDocument()
	})

	it('should render card with proper icon', () => {
		expect(screen.getByText('Simple message')).toBeInTheDocument()
	})
})
