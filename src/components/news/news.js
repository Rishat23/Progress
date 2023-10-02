import cn from 'classnames'
import React from 'react'

import NewsList from './news-list'
import cl from './news.module.scss'

function News() {
	const classNames = cn([cl.wrapper, 'container'])
	return (
		<section className={cl.content}>
			<div className={classNames}>
				<h2>Новости</h2>
				<div className={cl.cards}>
					<NewsList />
					<NewsList />
					<NewsList />
				</div>
			</div>
		</section>
	)
}

export default News
