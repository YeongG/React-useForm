# Install

```
npm install use-easy-form 

yarn add use-easy form
```



# import

```ts
import {  } from 'use-easy-form';
```



# API

## useInput

```tsx
const [state, setStateFunc, changeStateFunc] = useInput("initialState");
```

```tsx
import React from 'react';
import { useInput } from 'use-easy-form';

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

export default App;
```

## useForm

```tsx
const onSubmitFunc = useForm([state1 ,state2, state3...], OptionObj);
```

```tsx
import React from 'react';
import { useInput, useForm } from 'use-easy-form';

const App = () => {
    const [id, setId, changeId] = useInput("");
    const [password, setPassword, changePassword] = useInput("");
    
    const option = {
    	preventDefault:true,
        require:true,
        requireFunc:() => { 
            alert("ID and PW are required"); 
			// ...codes 
		},
        submitFunc:() => {
            setId("");
            setPassword("");
            // axios.post("URL"); 
            // ...codes 
        },
    };
    
    const loginFormSubmitFunc = useForm([id, password], option);

    return (
    	<form onSubmit={loginFormSubmitFunc}>
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
            <button type="submit">Submit</button>
       </form>
    );
}

export default App;
```

 * ## optionObj

   ```tsx
   interface useFormOption {
       submitFunc:Function, //Runs on "submit"
       requireFunc?:Function, //Executed when states are not present
       require?:boolean, //Use states all must exist 
       preventDefault?:boolean
   }
   ```

   
 
