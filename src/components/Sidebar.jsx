import React from 'react';
import PropTypes from 'prop-types';

import { formatCurrentName } from '../utils/currentUser';

const Sidebar = ({
    currentUserId,
    users = [],
}) => (
    <aside className="sidebar">
        {!users.length && <i>Feeling lonely?</i>}
        <ul>
            {users.map(user =>
                <li key={user.id}>
                    {
                        currentUserId === user.id ?
                        formatCurrentName(user.name) :
                        user.name
                    }
                </li>
            )}
        </ul>
    </aside>
);

Sidebar.propTypes = {
    currentUserId: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}

export default Sidebar
