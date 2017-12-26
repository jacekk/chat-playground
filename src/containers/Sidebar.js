import {connect} from 'react-redux'

import Sidebar from '../components/Sidebar'

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.user.id,
    users: state.users,
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
