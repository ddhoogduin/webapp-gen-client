import React, {Component} from 'react'
import {
    Button,
    Icon,
    Table,
    Checkbox, Form, Tab, Dropdown, Popup
} from 'semantic-ui-react'

import {Field, reduxForm, change} from "redux-form";
import getField from '../../modules/getField'

class DetailFormClient extends Component{

    renderFields = (fields) => {
       return fields.map(
           (item, key)=> getField(item, key)
       )
    };
    renderTabs = (tabs) =>{
        let panes = [];
        tabs.map(
            (item, index) => {
                panes.push({menuItem: item.sectionTitle, render: () => <Tab.Pane key={`detailClient-tab-${this.props.entity}${index}`}>{
                    this.renderFields(item.fields)
                }
                </Tab.Pane>})
            }
        );
        return panes
    };
    render() {
        return(
                <Form>
                <Tab panes={this.renderTabs(this.props.formConfig)} />
                <Button type='submit' disabled={this.props.submitting} fluid>Save</Button>
                </Form>
        )
    }
}

export default reduxForm({
    form:'detailForm',
    enableReinitialize : true
})(DetailFormClient)
