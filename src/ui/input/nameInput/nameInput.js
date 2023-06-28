import cn from 'classnames'
import React, { useState } from 'react'

import toCapitalize from '../../../utils/toCapitalize'
import cl from '../input.module.scss'

function NameInput({ onChange, disabled, type, colorStyle, containerClassName, ...props }) {
	const [inputValue, setInputValue] = useState('')

	const handleChange = (event) => {
		const { value } = event.target
		setInputValue(value)
	}
	const classNames = cn([
		cl.input,
		{
			[cl[`input${colorStyle}`]]: toCapitalize
		}
	])

	return (
		<input
			className={classNames}
			placeholder="Введите ваше имя:"
			value={inputValue}
			disabled={disabled}
			onChange={handleChange}
			{...props}
		/>
	)
}
export default NameInput
