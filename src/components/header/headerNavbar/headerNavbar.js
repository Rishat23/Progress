import React from 'react'
import { NavLink } from 'react-router-dom'

import cl from './headerNavbar.module.scss'

function HeaderNavbar() {
	const links = [
		{ title: 'Возможности', href: '/' },
		{ title: 'Тарифы', href: '/' },
		{ title: 'Новости', href: '/' },
		{ title: 'Поддержка', href: '/' },
		{ title: 'О компании', href: '/' }
	]
	return (
		<nav>
			<ul className={cl.navbar}>
				{links.map(({ href, title }) => (
					<li key={`${href}-${title}`}>
						<NavLink className={cl.link} to exact={href}>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default HeaderNavbar
