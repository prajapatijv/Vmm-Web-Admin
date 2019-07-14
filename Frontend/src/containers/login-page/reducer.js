import { LOGIN_ACTIONS as C } from '../actionTypes'

const initialState={
    authToken:'',
    userName:'',
    password:'',
    rememberMe: false,
    processing: false,
    errors:[]
}

const Status = (state=initialState, action) => {
    
    switch (action.type) {
        case C.LOGIN:
            return {...state, processing:true }

        case C.LOGIN_SUCCESS:
            return {...state, 
                    userName:action.payload.userName, 
                    authToken:action.payload.authToken, 
                    password:"", 
                    processing:false 
                }

        case C.LOGIN_FAILURE:
            return {...state, errors:[...state.errors, action.payload] , processing:false }

        case C.LOGOUT:
            return {...state,  processing:true }

        case C.LOGOUT_SUCCESS:
            return initialState

        case C.LOGOUT_FAILURE:
            return initialState
            
        default:
            return state
    }
}

export default Status