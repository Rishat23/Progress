import React, { useState } from 'react'

import { Button, ButtonLink } from '../../ui'
import NameInput from '../../ui/input/nameInput'

function App() {
	const [disabled, setDisabled] = useState(true)

	return (
		<>
			<Button onClick={() => setDisabled(false)}>Получить консультацию</Button>
			<ButtonLink href="/соси" disabled={disabled}>
				Получить консультацию
			</ButtonLink>
			<NameInput />
			<NameInput colorStyle="darkest" />
		</>
	)
}

export default App
