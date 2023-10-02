import cn from 'classnames'
import React from 'react'

import ButtonLink from '../../ui/button/button-link'
import Logo from '../logo'
import cl from './header.module.scss'
import HeaderNavbar from './headerNavbar'

function Header() {
	const classNames = cn([cl.header, 'container'])
	return (
		<header className={cl.wrapper}>
			<div className={classNames}>
				<Logo />
				<div className={cl.content}>
					<HeaderNavbar />
					<ButtonLink size="medium">Получить консультацию</ButtonLink>
				</div>
			</div>
		</header>
	)
}

export default Header
