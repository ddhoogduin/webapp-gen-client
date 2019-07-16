import React, {Component} from 'react'
import {connect} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'

import LoginContainer from './auth/LoginContainer'
import App from "../components/App";

import DashboardContainer from "./dashboard/DashboardContainer";
import ClientContainer from "./client/ClientContainer"
import {PrivateRoute} from "../components/modules/routes/PrivateRoute";


class AppContainer extends Component{

    render(){
        return(<App>
            <Router history={history}>
                <Switch>
                    <Route path={'/login'} exact component={LoginContainer}/>
                    <PrivateRoute path="/" exact component={DashboardContainer}/>
                    <PrivateRoute path="/:clientAlias"  component={ClientContainer}/>
                </Switch>
            </Router>
        </App>)
    }
}
export default connect()(AppContainer)