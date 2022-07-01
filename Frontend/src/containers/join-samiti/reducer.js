import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const joinsamitis = (state=initialState, action) => {
    var joinsamitiState = withPageReducer(keys.JoinSamiti, state, action, defaultJoinSamiti, (criteria) => byName(criteria))

    switch (action.type) {
        case `FETCH_JOINSAMITIS_SUCCEED`: {
            return {...joinsamitiState, "samititypes": action.payload.data.samititypes }
        }

        default:
            return joinsamitiState
    }
}

const defaultJoinSamiti = { 
    id:0,
}

const initialState = {
    joinsamitis:[],
    samititypes:[]
} 

const byName = criteria => joinsamiti => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return joinsamiti.personName.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default joinsamitis