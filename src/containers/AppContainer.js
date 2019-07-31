import React, {Component} from 'react'
import {connect} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'

import LoginContainer from './auth/LoginContainer'
import App from "../components/App";

import DashboardContainer from "./dashboard/DashboardContainer";
import ClientContainer from "./client/ClientContainer"
import {PrivateRoute} from "../components/modules/routes/PrivateRoute";
import _ from "lodash";


class AppContainer extends Component{

    render(){
        if(!this.props.activeUser.loggedIn){
            return <LoginContainer/>
        }else{
            return(<App>

                <Router history={history}>
                    <Switch>
                        <PrivateRoute path="/" exact component={DashboardContainer}/>
                        <PrivateRoute path="/:clientAlias"  component={ClientContainer}/>
                    </Switch>
                </Router>
            </App>)
        }

    }
}
const mapStateToProps = ({auth}) => {
    return {
        activeUser: auth.authenticationUser
    }
};
export default connect(mapStateToProps)(AppContainer)