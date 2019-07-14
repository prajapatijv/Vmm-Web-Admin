import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const categories = (state=initialState, action) => {
    return withPageReducer(keys.Category, state, action, defaultCategory, (criteria) => byName(criteria))
}

const defaultCategory = { 
    id:0,
    name:"",
    shortName:"",
    active:0
}

const initialState = {
    categories:[]
} 

const byName = criteria => category => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return category.name.toLowerCase().match(criteria.toLowerCase())     
    }
}

export default categories