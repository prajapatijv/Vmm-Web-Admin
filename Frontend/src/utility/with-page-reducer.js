import { Config } from '../AppConfig'

const withPageReducer = (key, state, action, defaultEntity, filterByFn) => {
    const contextObj =Config.mappings[key]
    return template(contextObj, state, action, defaultEntity, filterByFn)
}

const template = (contextObj, state, action, defaultEntity, filterByFn) => {
    switch (action.type) {
        case `FETCH_${contextObj.actionContext.PLURAL}`:
            return {...state, fetching:true , error:null}
        
        case `FETCH_${contextObj.actionContext.PLURAL}_SUCCEED`: {
            return {
                ...state, fetching:false,
                [contextObj.actionContext.plural]: action.payload.criteria === "" ? 
                    action.payload.data[contextObj.actionContext.plural] : 
                    action.payload.data[contextObj.actionContext.plural].filter(filterByFn(action.payload.criteria)) 
                }
        }

        case `FETCH_${contextObj.actionContext.PLURAL}_FAILED`: {
            return {...state, fetching:false }
        }

        case `ADD_${contextObj.actionContext.SINGULAR}`: {
            return {...state, [contextObj.actionContext.singular]: defaultEntity }
        }

        case `CLOSE_${contextObj.actionContext.SINGULAR}`: {
            return {...state, [contextObj.actionContext.singular]:undefined }
        }

        case `SAVE_${contextObj.actionContext.SINGULAR}`: {
            return { ...state, saving: true }
        }

        case `SAVE_${contextObj.actionContext.SINGULAR}_SUCCEED`: {
            return { ...state, 
                [contextObj.actionContext.singular]:undefined, 
                [contextObj.actionContext.plural]: action.payload[contextObj.actionContext.plural],
                saving: false }
        }

        case `SAVE_${contextObj.actionContext.SINGULAR}_FAILED`: {
            return { ...state, [contextObj.actionContext.singular]: false }
        }

        case `DELETE_${contextObj.actionContext.SINGULAR}`: {
            return {...state, deleting:true }
        }

        case `DELETE_${contextObj.actionContext.SINGULAR}_SUCCEED`: {
            return { ...state, deleting: false, 
                [contextObj.actionContext.plural]: state[contextObj.actionContext.plural].filter(obj => obj.id !== action.payload)
            }
        }

        case `DELETE_${contextObj.actionContext.SINGULAR}_FAILED`: {
            return { ...state, deleting: false }
        }        

        default:
            return state
    }
}

export default withPageReducer