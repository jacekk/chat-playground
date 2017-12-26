import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message'

const MessagesList = ({
    messages = [],
}) => (
    <section className="messagesList">
        <ul>
            {messages.map(message =>
                <Message key={message.id} {...message} />
            )}
        </ul>
    </section>
);

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }))
}

export default MessagesList
