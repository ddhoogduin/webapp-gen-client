import React, {Component} from 'react'
import {connect} from "react-redux";
import DashboardOverview from "../../components/pages/dashboard/DashboardOverview";
import {getClients, setActiveClient} from '../../actions/client/clientActions'
import {userLogout} from '../../actions/auth/authenticationActions'
import _ from 'lodash'

class DashboardContainer extends Component{

    componentDidMount() {
        this.props.getClients();
    }
    render(){
        return(
            <DashboardOverview
                activeUserDetails={this.props.activeUserDetails}
                userLogout={this.props.userLogout}
                clients={this.props.clients}
            />
        )
    }
}
const mapStateToProps = ({dashboard, auth}) => {
    return {
        clients: _.values(dashboard.clients),
        activeUserDetails: auth.authenticationUser.user.payload
    }
};
export default connect(mapStateToProps, {getClients, setActiveClient, userLogout})(DashboardContainer);