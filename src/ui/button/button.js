import cn from 'classnames'
import React from 'react'

import cl from './button.module.scss'

function Button({ children, disabled, className, type = 'button', ...props }) {
	const classNames = cn([cl.btn, className, { [cl.btnDisabled]: disabled }])
	return (
		<button type={type} className={classNames} disabled={disabled} {...props}>
			{children}
		</button>
	)
}

export default Button
