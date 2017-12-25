import React, {Component} from 'react';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <aside className="sidebar">
                    Users
                </aside>
                <section className="main">
                    <section className="messagesList">
                        Message List
                    </section>
                    <section className="newMessage">
                        New Message
                    </section>
                </section>
            </div>
        );
    }
}

export default App;
