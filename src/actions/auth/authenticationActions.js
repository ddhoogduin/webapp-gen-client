import SascWebApi from '../../apis/SascWeb'
import {authentication} from '../../constants/types'

const verifyLogin = (response) => {
    console.log(response.data.success);
    if(response.data.success === true){
        localStorage.setItem('user', JSON.stringify(response.data));
        return {
            type: authentication.LOGIN_SUCCESS,
            payload: response.data
        }
    }else{
        return {
            type: authentication.LOGIN_FAILED,
            payload: "Incorrect password or confirmation code entered. Please try again."
        }
    }
};
export const userLogin = formValues => async (dispatch) => {
    const response = await SascWebApi.post('/users/auth', formValues);
    dispatch(verifyLogin(response));
};

export const userLogout = () =>{
    return{
        type: authentication.LOGOUT_SUCCESS
    }
};

export const isNotAuth  = (status) =>{
    if(status === 401){
        return {type:authentication.UNAUTHORIZED}
    }
    return false
};
