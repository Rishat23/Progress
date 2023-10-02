import cn from 'classnames'
import React from 'react'

import Logo from '../logo'
import cl from './footer.module.scss'
import FooterNavbar from './footerNavbar'

function Footer() {
	const classNames = cn([cl.footer, 'container'])

	return (
		<footer className={cl.wrapper}>
			<div className={classNames}>
				<div className={cl.footerNavbar}>
					<Logo />
					<FooterNavbar />
				</div>
				<div className={cl.content}>
					<div className={cl.copyright}>
						<ul className={cl.socialNetwork}>
							<li className={cl.socialNetworkYouTube}>
								<a href="/"> </a>
							</li>
							<li className={cl.socialNetworkVK}>
								<a href="/"> </a>
							</li>
						</ul>
						<p>© 2016-2022 ООО «ПРОГРЕСС+» Все права защищены</p>
					</div>
					<div className={cl.support}>
						<p>Техническая поддержка</p>
						<a href="tel:+7 (961) 047-20-73">+7 (961) 047-20-73</a>
						<a href="mailto:">sale@progressrb.ru</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
