import {Authentication} from '../../constants/types'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state=initialState, action) => {
    switch (action.type) {
        case Authentication.LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}