import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const districts = (state=initialState, action) => {
    var eventState = withPageReducer(keys.District, state, action, defaultDistrict, (criteria) => byName(criteria))

    switch (action.type) {
        case `FETCH_DISTRICTS_SUCCEED`: {
            return { ...eventState, 
                "states": action.payload.data.states,
             }
        }

        default:
            return eventState
    }
}


const defaultDistrict = { 
    id:0,
    districtName:""
}

const initialState = {
    districts:[],
    states:[]
} 

const byName = criteria => district => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return district.districtName.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default districts