import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const districts = (state=initialState, action) => {
    return withPageReducer(keys.District, state, action, defaultDistrict, (criteria) => byName(criteria))
}

const defaultDistrict = { 
    id:0,
    districtName:""
}

const initialState = {
    districts:[]
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