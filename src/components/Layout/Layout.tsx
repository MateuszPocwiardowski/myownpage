import Navigation from '../Navigation/Navigation'

const Layout = ({ children }: { children: any }) => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
		</>
	)
}

export default Layout
