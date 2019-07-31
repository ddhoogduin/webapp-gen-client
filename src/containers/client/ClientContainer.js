import React, {Component} from 'react'
import {connect} from "react-redux";
import Client from '../../components/pages/client/Client'
import history from "../../history";
import DashboardContainer from "../dashboard/DashboardContainer";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import HomeClientContainer from "./home/HomeClientContainer";
import OverviewFormClientContainer from "./form/OverviewFormClientContainer";
import DetailFormClientContainer from "./form/DetailFormClientContainer";
import {clientMenu} from "../../constants/menus";
import _ from "lodash";
import {Transition} from 'semantic-ui-react'

import {setActiveClient} from '../../actions/client/clientActions'
import {unsetRedirect} from '../../actions/client/clientManagerActions'
import ClientComponentFrame from "../../components/modules/clientComponentFrame";
import OverviewInputClientContainer from "./input/OverviewInputClientContainer";
import DashboardOverview from "../../components/pages/dashboard/DashboardOverview";
import {userLogout} from "../../actions/auth/authenticationActions";

class ClientContainer extends Component{

    clientAlias=this.props.match.params.clientAlias;

    renderRouteItem =  (component, {name, description}) =>{
        return (

            <ClientComponentFrame
                name={name}
                description={description}
                breadCrumb={`${this.clientAlias} / ${name.toLowerCase()}`}
            >
                {component}
            </ClientComponentFrame>
        )

    };

    renderClientContent = () => {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/:alias" exact
                           render={(props) => this.renderRouteItem(<HomeClientContainer{...props} />,
                               {name:'Home', description:'Client overview'}
                               )}
                    />
                    <Route path="/:alias/form" exact
                           render={(props) => this.renderRouteItem(<DetailFormClientContainer {...props} />,
                               {name:'Form', description:'Edit the form'}
                           )}
                    />
                    <Route path="/:alias/inputs" exact
                           render={(props) => this.renderRouteItem(<OverviewInputClientContainer {...props} />,
                               {name:'Inputs', description:'Overview of clientResources inputs'}
                           )}
                    />
                </Switch>
            </Router>
        )
    };
    componentWillMount() {
        this.props.setActiveClient(this.clientAlias);
    };
    render(){
        if(!this.props.client.id){
            return null;
        }
        return(
            <Client
                client={this.props.client}
                menuItems={clientMenu}
                activeBody={this.renderClientContent()}
                clientPath={this.props.location.pathname}
                unsetRedirect={this.props.unsetRedirect}
                managerClient={this.props.managerClient}
                activeUserDetails={this.props.activeUserDetails}
                userLogout={this.props.userLogout}
                clients={this.props.clients}
            />
        )
    }
}
const mapStateToProps = ({client, auth}) => {
    return {
        client: client.activeClient,
        managerClient: client.managerClient,
        activeUserDetails: auth.authenticationUser.user.payload
    }
};
export default connect(mapStateToProps, {setActiveClient, unsetRedirect, userLogout})(ClientContainer);