import { combineReducers } from 'redux';

import messages from './messages';
import user from './user';
import users from './users';

const chatReducers = combineReducers({
    messages,
    user,
    users,
});

export default chatReducers;
