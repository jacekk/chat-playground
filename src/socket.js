import {ADD_MESSAGE, messageReceived} from './reducers/messages'
import {ADD_USER, USERS_LIST, addUser, populateUsersList} from './reducers/users'

const socketSetup = (dispatch, currUser) => {
    const socket = new WebSocket('ws://localhost:8989')

    socket.onopen = () => {
        const action = {
            type: ADD_USER,
            ...currUser,
        }
        socket.send(JSON.stringify(action))
    }

    socket.onmessage = (ev) => {
        const data = JSON.parse(ev.data)

        switch (data.type) {
            case ADD_MESSAGE:
                dispatch(messageReceived(data));
                break;
            case ADD_USER:
                dispatch(addUser(data.name));
                break;
            case USERS_LIST:
                dispatch(populateUsersList(data.users));
                break;
            default:
                break;
        }
    }

    return socket
}

export default socketSetup
