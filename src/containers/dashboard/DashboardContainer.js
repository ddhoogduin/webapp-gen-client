import React, {Component} from 'react'
import {connect} from "react-redux";
import DashboardOverview from "../../components/pages/dashboard/DashboardOverview";
import {getClients, setActiveClient} from '../../actions/client/clientActions'
import _ from 'lodash'

class DashboardContainer extends Component{

    componentDidMount() {
        this.props.getClients();
    }

    render(){
        return(
            <DashboardOverview
                clients={this.props.clients}
            />
        )
    }
}
const mapStateToProps = ({dashboard}) => {
    return {
        clients: _.values(dashboard.clients)
    }
};
export default connect(mapStateToProps, {getClients, setActiveClient})(DashboardContainer);