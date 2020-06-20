import React, { Component } from 'react';
import 'styles/index.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from 'container/MainLayout';
import {Routes} from 'config/Routes';

class App extends Component {
    render() {
        return (
        <div className="container-fluid">
            <Router>
                <Route path={Routes.LandingPage} component={MainLayout} />                
            </Router>
        </div>
        );
    }
}

export default App;