import React from 'react'

import vk from '../../../assets/icons/vk.svg'
import cl from './news-list.module.scss'

function NewsList() {
	return (
		<div className={cl.card}>
			<div>
				<img className={cl.img} src={vk} alt="ХУЙ" />
				<div className={cl.footer}>
					<div className={cl.event}>
						<p>питание</p>
					</div>
					<div className={cl.data}>
						<p> 15:55 | 01.08.22</p>
					</div>
				</div>
			</div>
			<div className={cl.textWrapper}>
				<h3>Новость</h3>
				<p>Описание новости Описание новости Описание новости Описание новостиОписание новости Описание</p>
			</div>
		</div>
	)
}

export default NewsList
