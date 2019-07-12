import {api_protocol, form, input} from "../constants/types";
import SascWebApi from "../apis/SascWeb";

import _ from 'lodash'

const verifyGetApiProtocolList = (response) =>{
    if(response.status === 200){
        return {
            type: api_protocol.API_PROTOCOL_LIST_SUCCESS,
            payload: response.data
        }
    }
    return {
        type: api_protocol.API_PROTOCOL_LIST_FAILED
    }
};

export const getApiProtocolList = () => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`api_protocols`);
    return dispatch(verifyGetApiProtocolList(response));
}

