# useInput

## import

```jsx
import { useInput } from 'react';
```

## API

```jsx
const [state, setStateFunc, changeFunc] = useInput("initialValue");
```

```jsx
const App = () => {
    const [id, setId, changeId] = useInput("");
    const [password, setPassword, changePassword] = useInput("");
  	
    return (
    	<>
        	<input 
                type="text" 
                name="id" 
                value={id} 
                onChange={changeId} 
            />
        	<input 
                type="password" 
                name="password" 
                value={password} 
                onChange={changePassword} 
            />
        </>
    );
}
```

