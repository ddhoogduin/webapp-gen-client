import {combineReducers} from "redux";
import listApiProtocolClientReducer from "./listApiProtocolReducer";
import listFormClientReducer from "./listFormReducer";
import activeFormClientReducer from "./activeFormReducer";
import listInputReducer from "./listInputReducer";

export default combineReducers({
    listApiProtocolClient: listApiProtocolClientReducer,
    listFormClient: listFormClientReducer,
    activeFormClient: activeFormClientReducer,
    listInputClient: listInputReducer,
});