import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import rootReducer from './reducer/' 
// importing reducer as rootReducer because we exported as default, can give any name we want on import
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
// logger has to be the last thing passed into applyMiddleware
// redux will call the middlware functions in the order you pass them in

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
