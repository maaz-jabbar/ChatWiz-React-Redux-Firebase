import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
import Chats from './components/chats';

import Apphistory from './History'

class Routers extends Component {
    render() {
        return (
            <Router history={Apphistory}>
                <div>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/chats" component={Chats} />

                    </div>
            </Router>
        )
    }
}

export default Routers;