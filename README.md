<h2>Usage</h2>

import thaanaKeyboard
```bash
import { thaanaKeyboard } from  "../utils/thaanaKeyboard"
```
```bash
...
	const [name, setName] =  useState('')

	return (
		<input
		value={name}
		onChange={e=>setName(thaanaKeyboard(e.target.value))}
		/>
	)
....
```
or
```bash
	onChange={e=> e.target.value = thaanaKeyboard(e.target.value))}
```