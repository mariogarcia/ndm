import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { appReducers } from './reducers'

let store = createStore(appReducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
