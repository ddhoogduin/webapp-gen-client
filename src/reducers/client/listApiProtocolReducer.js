import {api_protocol} from '../../constants/types'

export default (state={}, action) => {
    switch (action.type) {
        case api_protocol.API_PROTOCOL_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}