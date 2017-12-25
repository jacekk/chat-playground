import React from 'react';
import PropTypes from 'prop-types';

 const NewMessage = ({
     addMessage,
}) => (
    <section className="newMessage">
        <input
            type="text"
            onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                    addMessage(ev.target.value, 'Me')
                    ev.target.value = ''
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
}

export default NewMessage
