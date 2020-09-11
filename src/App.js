import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Register from './components/Register/Register'


const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/join" component={Join} />
            <Route path="/register" component={Register} />
            <Route path="/chat" component={Chat} />
        </Router>
    );
}

export default App;