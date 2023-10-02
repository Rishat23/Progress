import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import cl from './logo.module.scss'

function Logo() {
	return (
		<NavLink exact to="/" className={cl.logo}>
			<img className={cl.img} src={logo} alt="logo" />
			<span className={cl.text}>Прогресс +</span>
		</NavLink>
	)
}

export default Logo
