import cn from 'classnames'
import React from 'react'

import toCapitalize from '../../utils/toCapitalize'
import cl from './button.module.scss'

function Button({ children, disabled, className, type = 'button', size = 'medium', ...props }) {
	const classNames = cn([cl.btn, className, { [cl.btnDisabled]: disabled }, cl[`btn${toCapitalize(size)}`]])
	return (
		<button type={type} className={classNames} disabled={disabled} {...props}>
			{children}
		</button>
	)
}

export default Button
