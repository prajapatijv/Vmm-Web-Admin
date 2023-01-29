import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const talukas = (state=initialState, action) => {
    return withPageReducer(keys.Taluka, state, action, defaultTaluka, (criteria) => byName(criteria))
}

const defaultTaluka = { 
    id:0,
    talukaName:""
}

const initialState = {
    talukas:[]
} 

const byName = criteria => taluka => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return taluka.talukaName.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default talukas