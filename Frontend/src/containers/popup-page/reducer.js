import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const popups = (state=initialState, action) => {
    return withPageReducer(keys.Popup, state, action, defaultPopup, (criteria) => byName(criteria))

    /*switch (action.type) {
        case `FETCH_POPUPS_SUCCEED`: {
            return {...popupState, "popup": action.payload.data.popup[0] }
        }

        default:
            return popupState
    }*/

}

const defaultPopup = { 
    id:0,
    title:"",
    shortName:"",
    enabled:true,
    posterImage:"",
    documentLink:"",
    publishDate:""
}

const initialState = {
    popups:[],
} 

const byName = criteria => popup => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return popup.title.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default popups