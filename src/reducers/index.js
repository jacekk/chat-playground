import { combineReducers } from 'redux'

import messages from './messages'
import users from './users'

const chatReducers = combineReducers({
    messages,
    users,
});

export default chatReducers
