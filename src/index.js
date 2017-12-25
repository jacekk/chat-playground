import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import chatReducers from './reducers';

const appStore = createStore(chatReducers, composeWithDevTools());

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
