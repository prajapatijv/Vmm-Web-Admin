import { STATUS_ACTIONS as C } from '../actionTypes'

const initialState={
    infos:[],
    errors:[]
}

const Status = (state=initialState, action) => {
    
    switch (action.type) {
        case C.ADD_INFO_SUCCESS:
            return {...state, infos:[...state.infos, action.payload] }

        case C.ADD_ERROR_SUCCESS:
            return {...state, errors:[...state.errors, action.payload] }

        case C.CLEAR_ERRORS:
            return {...state, errors:[] }

        case C.CLEAR_INFOS:
            return {...state, infos:[] }

        default:
            return state
    }
}

export default Status