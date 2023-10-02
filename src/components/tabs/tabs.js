import React, { useState } from 'react'

import cl from './tabs.module.scss'

function Tabs() {
	const tabs = [
		{ tabId: '0', text: 'Безналичный расчёт' , delegate: <h1> hello  Безналичный расчёт</h1> },
		{ tabId: '1', text: 'калькуляция', delegate: <h1> hello калькуляция</h1> }
	]
	const [selectedTabId, setSelectedTabId] = useState([...tabs].shift()?.tabId)



	return (
		<>
			<ul className={cl.tabsContainer}>
				{tabs.map(({ tabId, text }) => (
					<li key={tabId}>
						<button onClick={() => setSelectedTabId(tabId) }>
							{text}
						</button>
					</li>
				))}
			</ul>
			<div />
		</>
	)
}

export default Tabs
