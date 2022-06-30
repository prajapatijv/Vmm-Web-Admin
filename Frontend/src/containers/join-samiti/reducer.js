import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const joinsamitis = (state=initialState, action) => {
    return withPageReducer(keys.JoinSamiti, state, action, defaultJoinSamiti, (criteria) => byName(criteria))
}

const defaultJoinSamiti = { 
    id:0,
}

const initialState = {
    joinsamitis:[]
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