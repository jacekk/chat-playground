import uuid from 'uuid/v4';

export const ADD_USER = 'ADD_USER'
export const USERS_LIST = 'USERS_LIST'

export const addUser = (name) => ({
    type: ADD_USER,
    id: uuid(),
    name,
})

export const populateUsersList = (users) => ({
    type: USERS_LIST,
    users,
})

export default (state = [], action) => {
    switch (action.type) {
        case USERS_LIST:
            return action.users
        case ADD_USER:
            return state.concat([{
                id: action.id,
                name: action.name,
            }])
        default:
            return state
    }
}
