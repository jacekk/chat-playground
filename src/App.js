import React, { Component } from 'react';

import Sidebar from './containers/Sidebar';
import MessagesList from './containers/MessagesList';
import NewMessage from './containers/NewMessage';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Sidebar/>
                <section className="main">
                    <MessagesList/>
                    <NewMessage/>
                </section>
            </div>
        );
    }
}

export default App;
