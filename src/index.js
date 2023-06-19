import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import noteReducer from './store/noteReducer';


const store = createStore(noteReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<React.StrictMode>
		<App />
	</React.StrictMode>
</Provider>,
	document.getElementById('root')
);
