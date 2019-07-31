import {authentication} from '../../constants/types'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state=initialState, action) => {
    switch (action.type) {
        case authentication.LOGIN_SUCCESS:
            return {loggedIn: true, user:action.payload};
        case authentication.LOGOUT_SUCCESS:
            localStorage.removeItem('user');
            return {loggedIn: false};
        default:
            return state;
    }
}