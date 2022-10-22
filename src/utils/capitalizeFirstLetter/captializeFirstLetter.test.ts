import capitalizeFirstLetter from './index'

describe('capitalizeFirstLetter', () => {
	const elements = [
		{ testCase: 'simple text', expectedResult: 'Simple text' },
		{ testCase: 'SIMPLE TEXT', expectedResult: 'SIMPLE TEXT' },
		{ testCase: '123456', expectedResult: '123456' },
		{ testCase: '!@#$^', expectedResult: '!@#$^' },
	]

	it('should capitalize first letter', () => {
		elements.forEach(element => {
			expect(capitalizeFirstLetter(element.testCase)).toMatch(element.expectedResult)
		})
	})
})
