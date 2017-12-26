import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import chatReducers from './reducers';
import { setCurrentUser } from './reducers/user';
import setupSocket from './socket';
import handleNewMessage from './sagas';
import currentUser from './utils/currentUser';

const sagaMiddleware = createSagaMiddleware()
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));
const appStore = createStore(chatReducers, middlewares);
const socket = setupSocket(appStore.dispatch, currentUser)

appStore.dispatch(setCurrentUser(currentUser))
sagaMiddleware.run(handleNewMessage, { socket, currentUser })

ReactDOM.render(
    <Provider store={appStore} >
        <App />
    </Provider>,
    document.getElementById('root')
);
