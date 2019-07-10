import SascWebApi from '../../apis/SascWeb'
import {Authentication} from '../../constants/types'

const verifyLogin = (response) => {
    if(response.status === 202){
        return {
            type: Authentication.LOGIN_SUCCESS,
            payload: response.data.id
        }
    }else{
        return {
            type: Authentication.LOGIN_FAILED,
            payload: Authentication.LOGIN_FAILED
        }
    }
};
export const userLogin = formValues => async (dispatch, getState) => {
    const response = await SascWebApi.post('/users/login', formValues);
    dispatch(verifyLogin(response));
};
