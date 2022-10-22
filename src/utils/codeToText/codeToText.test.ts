import codeToText from './index'

describe('codeToText', () => {
	const elements = [
		{ testCase: 'SIMPLE_CODE', expectedResult: 'SIMPLE CODE' },
		{ testCase: 'SIMPLE-CODE', expectedResult: 'SIMPLE CODE' },
		{ testCase: '123456', expectedResult: '123456' },
		{ testCase: '!@#$^', expectedResult: '!@#$^' },
	]

	it('should translate code to text', () => {
		elements.forEach(element => {
			expect(codeToText(element.testCase)).toMatch(element.expectedResult)
		})
	})
})
