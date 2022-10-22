import isObject from './index'

describe('isObject', () => {
	const object = { name: 'John' }
	const array = ['John']
	const testFnc = () => {}
	const date = new Date()

	it('should return false if element is array', () => {
		expect(isObject(array)).toBeFalsy()
	})

	it('should return true if element is object', () => {
		expect(isObject(object)).toBeTruthy()
	})

	it('should return true if element is function', () => {
		expect(isObject(testFnc)).toBeTruthy()
	})

	it('should return true if element is date', () => {
		expect(isObject(date)).toBeTruthy()
	})
})
