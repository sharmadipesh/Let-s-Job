import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Routes} from 'config/Routes';
import Header from 'views/components/Header';
// import Footer from 'views/components/Footer';
import Jobs from 'views/Jobs';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="main-app-layout">
                    <div className="row">
                        <div className="col-2" />
                        <div className="col-8">
                            <Switch>
                                <Route exact  {...this.props} path={Routes.LandingPage} component={Jobs} />
                            </Switch>
                        </div>
                        <div className="col-2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;