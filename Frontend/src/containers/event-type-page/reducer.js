import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const eventtypes = (state=initialState, action) => {
    return withPageReducer(keys.EventType, state, action, defaultEventType, (criteria) => byName(criteria))
}

const defaultEventType = { 
    id:0,
    description:"",
    colorCode:'#000000'
}

const initialState = {
    eventtypes:[]
} 

const byName = criteria => eventType => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return eventType.description.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default eventtypes