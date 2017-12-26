import { takeEvery } from 'redux-saga/effects';

import { ADD_MESSAGE } from '../reducers/messages'

const handleNewMessage = function* (params) {
    yield takeEvery(ADD_MESSAGE, (action) => {
        action.authorId = params.currentUser.id;
        params.socket.send(JSON.stringify(action))
    })
};

export default handleNewMessage;
