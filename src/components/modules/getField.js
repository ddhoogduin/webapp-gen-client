import React from 'react'
import {textInput, sliderInput, selectInput} from "./reduxFormInputs";
import {Field} from "redux-form";
import _ from 'lodash'
import {required} from "../../constants/formValidationRules";

export default (inputData, key) =>{
    switch (inputData.type) {
        default:
        case 'text':
            return (
                <Field
                    key={`field-inputData-${key}`}
                    name={inputData.parameter}
                    component={textInput}
                    validate={[ required ]}
                    label={inputData.label}
                    inputDataAttr={{
                        placeholder: `Enter the ${inputData.label.toLowerCase()}`,
                        type:'text',
                    }}
                />
            )
        case 'select':
            return (
                <Field
                    key={`field-inputData-${key}`}
                    name={inputData.parameter}
                    component={selectInput}
                    validate={[ required ]}
                    label={inputData.label}
                    inputDataAttr={{
                        placeholder: `Enter the ${inputData.label.toLowerCase()}`,
                        options:['test']
                    }}
                />
            )
        case 'switch':
            return (
                <Field
                    name={inputData.name}
                    component={sliderInput}
                    label={inputData.label}
                />
            )
    }
}