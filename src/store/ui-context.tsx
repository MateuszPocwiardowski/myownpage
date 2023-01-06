import { createContext, ReactNode } from 'react'
import { UIContextInterface } from './store.types'

const UIContext = createContext<UIContextInterface>({})

export const UIContextProvider = ({ children }: { children: ReactNode }) => {
	const contextValue = {}

	return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
}

export default UIContext
