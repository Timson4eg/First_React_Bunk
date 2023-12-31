import React from 'react'
import styles from './Llogaout.module.scss'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../api'
import Cookies from 'js-cookie'
import { useAuth } from '../../../hooks/useAuth'

const BtnLogOut = () => {
	const navigate = useNavigate()
	const { isAuth, setIsAuth } = useAuth()
	const logOutBtn = () => {
		Cookies.remove(TOKEN)

		setIsAuth(false)
		navigate('/auth')
		window.location.reload()
	}
	return (
		<button className={styles.btn} onClick={() => logOutBtn()}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					// stroke-linecap="round"
					// stroke-linejoin="round"
					d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
				/>
			</svg>
		</button>
	)
}

export default BtnLogOut
