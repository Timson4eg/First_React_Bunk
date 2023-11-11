import Cookies from 'js-cookie'
import React, { createContext, useState } from 'react'
import { TOKEN } from '../api'
export const AuthContext = createContext()

const AuthProviders = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	const [toCardNumber, setToCardNumber] = useState('')

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				toCardNumber,
				setToCardNumber
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProviders
