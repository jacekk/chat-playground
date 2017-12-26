import React, { Component } from 'react';

import Sidebar from './containers/Sidebar';
import MessagesList from './containers/MessagesList';
import NewMessage from './containers/NewMessage';
import './App.css';

const App = () => (
    <div className="container">
        <Sidebar/>
        <MessagesList/>
        <NewMessage/>
    </div>
);

export default App;
