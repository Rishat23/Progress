import React from 'react'
import { NavLink } from 'react-router-dom'

import cl from './footerNavbar.module.scss'

function FooterNavbar() {
	const links = [
		{ title: 'Сервисы', href: '/' },
		{ title: 'O нас', href: '/' },
		{ title: 'Другие страницы', href: '/' }
	]
	return (
		<nav>
			<ul className={cl.navbar}>
				{links.map(({ href, title }) => (
					<li key={`${href}-${title}`}>
						<NavLink to exact={href} className={cl.link}>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default FooterNavbar
