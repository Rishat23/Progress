import cn from 'classnames'
import React from 'react'

import Partner from './partner'
import cl from './partners.module.scss'

function Partners() {
	const classNames = cn([cl.wrapper, 'container'])
	return (
		<section className={cl.content}>
			<div className={classNames}>
				<h2>Партнеры</h2>
				<div className={cl.partners}>
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
				</div>
			</div>
		</section>
	)
}

export default Partners
