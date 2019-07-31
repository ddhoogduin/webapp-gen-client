import {authentication} from '../../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case authentication.LOGIN_FAILED:
            return action.payload;
        case authentication.LOGIN_SUCCESS:
            return  '';
        default:
            return state
    }
}