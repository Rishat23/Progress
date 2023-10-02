import React from 'react'

import { Button } from '../../ui'
import NameInput from '../../ui/input/nameInput'
import cl from './mailing.module.scss'

function Mailing() {
	return (
		<section className={cl.wrapper}>
			<div className="container">
				<div className={cl.mailing}>
					<div className={cl.title}>
						<h2>Нe пропускай наши спецпредложения!</h2>
						<p>Подпишись на рассылку</p>
					</div>
					<NameInput />
					<div className={cl.footer}>
						<p className={cl.description}>
							Нажимая кнопку “Подписаться”, я даю согласие на обработку моих персональных данных
						</p>
						<Button size="Large">Подписаться</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Mailing
