import {connect} from 'react-redux'

import MessagesList from '../components/MessagesList'

const mapStateToProps = (state, ownProps) => ({
    messages: state.messages,
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
