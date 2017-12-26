import {connect} from 'react-redux'

import { formatCurrentName } from '../utils/currentUser';
import MessagesList from '../components/MessagesList';

const getAuthorName = (state, msg) => {
    if (state.user.id === msg.authorId) {
        return formatCurrentName(state.user.name);
    }

    return state.users.filter(
        u => u.id === msg.authorId
    )[0].name || 'Anonym';
};

const mapStateToProps = (state) => ({
    messages: state.messages.map(msg => ({
        ...msg,
        author: getAuthorName(state, msg),
    })).reverse(),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
