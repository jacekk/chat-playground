import { connect } from 'react-redux'

import NewMessage from '../components/NewMessage'
import { addMessage } from '../reducers/messages'

const mapStateToProps = () => ({})

const mapDispatchToProps = ({
    addMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
