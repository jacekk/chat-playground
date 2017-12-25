import uuid from 'uuid/v4';

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'

export const addMessage = (message, author) => ({
    type: ADD_MESSAGE,
    author,
    id: uuid(),
    message: message.trim(),
})

export const messageReceived = (message, author) => ({
    type: MESSAGE_RECEIVED,
    author,
    id: uuid(),
    message,
})

export default (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        case MESSAGE_RECEIVED:
            return state.concat([{
                author: action.author,
                id: action.id,
                message: action.message,
            }])
        default:
            return state
    }

}
