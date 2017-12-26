import uuid from 'uuid/v4';

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'

export const addMessage = (message, authorId) => ({
    type: ADD_MESSAGE,
    authorId,
    id: uuid(),
    message: message.trim(),
})

export const messageReceived = ({ id, message, authorId }) => ({
    type: MESSAGE_RECEIVED,
    authorId,
    id,
    message,
})

export default (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        case MESSAGE_RECEIVED:
            return state.concat([{
                authorId: action.authorId,
                id: action.id,
                message: action.message,
            }])
        default:
            return state
    }
}
