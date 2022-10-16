const codeToText = (text: string) => {
	switch (true) {
		case text.includes('_'):
			return text.replace('_', ' ')

		case text.includes('-'):
			return text.replace('-', ' ')

		default:
			return text
	}
}

export default codeToText
