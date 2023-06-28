import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/app'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <App />} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
