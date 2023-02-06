import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const talukas = (state=initialState, action) => {
    var eventState = withPageReducer(keys.Taluka, state, action, defaultTaluka, (criteria) => byName(criteria))

    switch (action.type) {
        case `FETCH_TALUKAS_SUCCEED`: {
            return { ...eventState,
                "states": action.payload.data.states, 
                "districts": action.payload.data.districts,
             }
        }

        default:
            return eventState
    }
}

const defaultTaluka = { 
    id:0,
    talukaName:"",
    stateId: 0,
    districtId: 0
}

const initialState = {
    talukas:[],
    states:[],
    districts:[]
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