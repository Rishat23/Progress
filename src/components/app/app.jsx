import React from 'react'

import Footer from '../footer'
import Header from '../header'
import HeroScreen from '../hero-screen'
import Mailing from '../mailing'
import News from '../news'
import Partners from '../partners'
import Tabs from '../tabs'

function App() {
	return (
		<>
			<Header />
			<HeroScreen />
			<Tabs />
			<Mailing />
			<Partners />
			<News />
			<Footer />
		</>
	)
}

export default App
