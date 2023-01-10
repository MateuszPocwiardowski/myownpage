import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import BurgerBtn from './BurgerBtn'

const handleClick = jest.fn()

describe('BurgerBtn', () => {
	beforeEach(() => {
		render(<BurgerBtn onClick={handleClick} isOpened={false} />)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should be closed by default', () => {
		expect(screen.getByRole('button')).toHaveClass('burgerBtn burgerBtn--closed')
	})

	it('should fire handleClick function on mouse click', () => {
		fireEvent.click(screen.getByRole('button'))

		expect(handleClick).toBeCalledTimes(1)
	})
})
