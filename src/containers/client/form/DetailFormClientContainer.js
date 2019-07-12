import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";

import {getForm} from '../../../actions/client/formClientActions'
import {getApiProtocolList} from '../../../actions/apiProtocolActions'
import _ from "lodash";
import DetailClientContainer from "../DetailClientContainer";
import dataListToOptions from '../../../components/modules/dataListToOptions'

class DetailFormClientContainer extends Component {
    entity = 'form';
    pk = 'id';
    pk_value = this.props.match.params.formId;
    formConfig =
        [
            {
                sectionTitle: 'Form',
                fields: [
                    {label: 'Published', name: 'published', type:'switch'},
                    {label: 'Name', name: 'name', type: 'input'},
                    {label: 'API Protocol', name: 'api_id', type: 'select',
                        options: []},
                    {label: 'Tool name as referenced in request url'}
                ]
            }
        ];
    componentDidMount() {
        this.props.getForm(this.pk_value);
        this.props.getApiProtocolList()
    }
    render() {
        return (
            <DetailClientContainer
                entity={this.entity}
                pk={this.pk}
                pk_value={this.pk_value}
                formConfig={this.formConfig}
                detailData={this.props.formData}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formData: state.activeFormClient,
        apiProtocolList: _.values(state.listApiProtocolClient),
        client: state.activeClient
    }
};
export default connect(mapStateToProps, {getForm, getApiProtocolList})(DetailFormClientContainer);
