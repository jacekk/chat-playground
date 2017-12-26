import { connect } from 'react-redux'

import NewMessage from '../components/NewMessage'
import { addMessage } from '../reducers/messages'

const mapStateToProps = (state) => ({
    currentUserId: state.user.id,
})

const mapDispatchToProps = ({
    addMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
