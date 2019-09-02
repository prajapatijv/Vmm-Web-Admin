import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const popups = (state=initialState, action) => {
    return withPageReducer(keys.Popup, state, action, defaultPopup, (criteria) => byName(criteria))
}

const defaultPopup = { 
    id: 0,
    title: "",
    shortName: "",
    posterImage: "",
    documentLink: "",
    publishDate: null,
    expiryDate: null,
    enabled: true,
    popupWidth: 0   
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