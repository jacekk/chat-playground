import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import chatReducers from './reducers';
import { addUser } from './reducers/users';

const appStore = createStore(chatReducers, composeWithDevTools());

appStore.dispatch(addUser('Me'))

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
