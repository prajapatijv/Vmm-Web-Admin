import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const areas = (state=initialState, action) => {
    return withPageReducer(keys.Area, state, action, defaultArea, (criteria) => byName(criteria))
}

const defaultArea = { 
    id:0,
    areaName:""
}

const initialState = {
    areas:[],
    area:{}
} 

const byName = criteria => area => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return area.areaName.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default areas