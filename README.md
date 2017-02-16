# Promise redux middleware

`npm install --save promise-redux-simple`

##Usage

In your root component:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Async from 'promise-redux-simple';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
```

Your action creator might look like:

```
import axios from 'axios';

export function fetchUsers(){	
	var request =  axios.get('https://jsonplaceholder.typicode.com/users');	
	return {
		type: 'FETCH_USERS',
		payload: request
	}
}
```

Reducer:

```
export default function(state=[],action){
	switch(action.type){
		case FETCH_USERS :		
			return [...state, ...action.payload];
		default:
			return state;
	}
}
```

*****
This package has been created only for test purposes. 
Nevertheless it can be used in real projects!
