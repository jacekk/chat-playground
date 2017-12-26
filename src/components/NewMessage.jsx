import React from 'react';
import PropTypes from 'prop-types';

 const NewMessage = ({
     currentUserId,
     addMessage,
}) => (
    <section className="newMessage">
        <input
            type="text"
            onKeyPress={(ev) => {
                if (ev.key === 'Enter' && ev.target.value) {
                    addMessage(ev.target.value, currentUserId);
                    ev.target.value = '';
                }
            }}
            ref={node => {
                node.focus();
            }}
        />
    </section>
);

NewMessage.propTypes = {
    addMessage: PropTypes.func.isRequired,
    currentUserId: PropTypes.string.isRequired,
}

export default NewMessage
