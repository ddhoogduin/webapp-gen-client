import SascWebApi from '../../apis/SascWeb'
import {client} from '../../constants/types'
import {isNotAuth} from '../auth/authenticationActions'

const verifyGetClients = (response) =>{

    // const unauthorized = isNotAuth(response.status);
    // if(unauthorized){
    //     return unauthorized
    // }

    if(response.status === 200){
        return {
            type: client.CLIENT_LIST_SUCCESS,
            payload: response.data
        }
    }
    return {
        type: client.CLIENT_LIST_FAILED
    }
};

export const getClients = () => async (dispatch) => {
    const response = await SascWebApi.get('/clients');
    dispatch(verifyGetClients(response));
};
const verifyClientRequest = (response) =>{
    if(response.status === 200){
        return {
            type: client.CLIENT_ACTIVATE,
            payload: response.data
        }
    }
    return {
        type: client.CLIENT_DEACTIVATE
    }
};

export const setActiveClient = (requestedClientAlias) => async (dispatch, getState) =>{

    if(requestedClientAlias !== getState().client.activeClient.clientAlias){
        const response = await SascWebApi.get(`/clients/${requestedClientAlias}`);
        dispatch(verifyClientRequest(response));
    }
};