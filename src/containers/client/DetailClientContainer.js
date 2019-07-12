import React, {Component, PureComponent} from 'react'
import DetailClient from "../../components/pages/client/DetailClient";

class DetailClientContainer extends Component{
    render(){
        return (
            <DetailClient
                formConfig={this.props.formConfig}
                client={this.props.client}
                initialValues={this.props.detailData}
            />
        );
    }
}
export default DetailClientContainer;
