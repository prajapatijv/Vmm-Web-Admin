import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const queries = (state=initialState, action) => {
    return withPageReducer(keys.Query, state, action, defaultQuery, (criteria) => byName(criteria))
}

const defaultQuery = { 
    id:0,
    name:"",
    query:"",
    answer:"",
    contact:"",
    email:"",
    replied:0
}

const initialState = {
    queries:[],
} 

const byName = criteria => query => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return query.description.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default queries