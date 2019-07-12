import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";

import {getClientInputList} from '../../../actions/client/inputClientActions'
import _ from "lodash";
import OverviewClientContainer from "../OverviewClientContainer";
import {overview} from '../../../constants/types'

class OverviewInputClientContainer extends Component{
    entity='input';
    pk='id';
    addItem = (selection) =>{console.log('test')};
    removeSelection = () =>{console.log('test')};
    tableHeaders=[
        {label: '#', name:'number', format:'row-number'},
        {label: 'Published', name:'published', format:'slide', action: this.togglePublishItem},
        {label: 'Name', name:'name', format:'link-detail'},
        {label: 'Form', name:'form_name'},
        {label: 'Created at', name:'created_at', format:'dateTime'},
        {label: 'Modified at', name:'modified_at', format:'dateTime'},
    ];
    dataActionConfiguration = [
        {type: overview.OVERVIEW_ADD, action: this.addItem},
        {type: overview.OVERVIEW_REMOVE, action: this.removeSelection}
    ];
    componentDidMount() {
        this.props.getClientInputList();
    }
    render(){
        return (
            <OverviewClientContainer
                client={this.props.client}
                entity={this.entity}
                pk={this.pk}
                data={this.props.overviewData}
                tableHeaders={this.tableHeaders}
                publishItem={this.publishItem}
                dataActionConfiguration={this.dataActionConfiguration}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        overviewData: _.values(state.listInputClient),
        client: state.activeClient
    }
};
export default connect(mapStateToProps,
    {getClientInputList})
(OverviewInputClientContainer);
