import {combineReducers} from "redux";
import listApiProtocolClientReducer from "./listApiProtocolReducer";
import listFormClientReducer from "./listFormReducer";
import activeFormClientReducer from "./activeFormReducer";
import listInputReducer from "./listInputReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
    activeClient: clientReducer,
    listApiProtocolClient: listApiProtocolClientReducer,
    listFormClient: listFormClientReducer,
    activeFormClient: activeFormClientReducer,
    listInputClient: listInputReducer,
});