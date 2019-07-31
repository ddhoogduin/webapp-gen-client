import {form, input} from "../../constants/types";
import SascWebApi from "../../apis/SascWeb";

import _ from 'lodash'

export const addInput = (item) => {
    return {
        type: input.INPUT_LIST_ADD_SUCCESS,
        payload: item
    }
}
export const removeInput = (index) => {
    return {
        type: input.INPUT_LIST_REMOVE_SUCCESS,
        payload: index
    }
}
const verifyGetInputList = (response) =>{
    if(response.status === 200){
        return {
            type: input.INPUT_LIST_SUCCESS,
            payload: response.data
        }
    }
    return {
        type: input.INPUT_LIST_FAILED
    }
};

export const getClientFormInputList = (formId) => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`clients/${getState().client.activeClient.id}/forms/${formId}/inputs`);
    return dispatch(verifyGetInputList(response));
}

export const getClientInputList = () => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`clients/${getState().client.activeClient.id}/inputs`);
    return dispatch(verifyGetInputList(response));
}

export const addInputOption = (id, value, label) => {
    return {
        type: input.INPUT_OPTION_LIST_ADD,
        payload:{id, value, label}
    }
}
export const removeInputOption = (id, index) => {
    return {
        type: input.INPUT_OPTION_LIST_REMOVE,
        payload:{id, index}
    }
}