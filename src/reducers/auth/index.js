import {combineReducers} from "redux";
import loginFormErrorsReducer from "./errors/loginFormReducer";
import authenticationUserReducer from "./authenticationReducer";

export default combineReducers({
    loginFormErrors: loginFormErrorsReducer,
    authenticationUser: authenticationUserReducer,
});