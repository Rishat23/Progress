import cn from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

import toCapitalize from '../../../utils/toCapitalize'
import cl from '../button.module.scss'

function ButtonLink({ children, href = '', disabled, size, className, ...props }) {
	const classNames = cn([cl.btn, className, { [cl.btnDisabled]: disabled }, cl[`btn${toCapitalize(size)}`]])

	const redirectHandler = (event) => {
		if (!disabled && href) {
			return
		}

		event.preventDefault()
	}

	return (
		<NavLink to={href} onClick={redirectHandler} className={classNames} disabled={disabled} {...props}>
			{children}
		</NavLink>
	)
}

export default ButtonLink
