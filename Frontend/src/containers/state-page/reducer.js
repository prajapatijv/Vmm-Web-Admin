import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const states = (state=initialState, action) => {
    return withPageReducer(keys.State, state, action, defaultState, (criteria) => byName(criteria))
}

const defaultState = { 
    id:0,
    stateName:""
}

const initialState = {
    states:[]
} 

const byName = criteria => state => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return state.stateName.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default states