import React from 'react'

import play from '../../assets/images/play.svg'
import cl from './hero-screen.module.scss'

function HeroScreen() {
	return (
		<section className={cl.heroScreen}>
			<div className={cl.content}>
				<div className={cl.textWrapper}>
					<h1>Proviant-Эксперт</h1>
					<p className={cl.smallText}>
						составление меню, калькуляция, безналичный расчёт, отчётность для организаций в сфере питания
					</p>
				</div>
				<img src={play} alt="/" />
			</div>
		</section>
	)
}

export default HeroScreen
