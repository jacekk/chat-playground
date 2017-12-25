import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({
    users = [],
}) => (
    <aside className="sidebar">
        {!users.length && <i>Feeling lonely?</i>}
        <ul>
            {users.map(user =>
                <li key={user.id}>
                    { user.name }
                </li>
            )}
        </ul>
    </aside>
);

Sidebar.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}

export default Sidebar
