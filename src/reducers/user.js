export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
})

export default (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.payload
        default:
            return state
    }
}
