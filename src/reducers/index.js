import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import clientReducers from './client'
import dashboardReducers from './dashboard'
import authReducers from './auth'



export default combineReducers({
    form: formReducer,
    dashboard: dashboardReducers,
    client: clientReducers,
    auth: authReducers
});