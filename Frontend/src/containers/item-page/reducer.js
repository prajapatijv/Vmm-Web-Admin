import  withPageReducer from '../../utility/with-page-reducer'
import keys from '../container-types'

const items = (state=initialState, action) => {
    return withPageReducer(keys.Item, state, action, defaultItem, (criteria) => byItemName(criteria))
}

const defaultItem = { 
    id:0,
    itemName:"",
    rate:0,
    type:"",
    stock:0
}

const initialState = {
    items:[]
} 

const byItemName = criteria => item => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return item.itemName.toLowerCase().match(criteria.toLowerCase())     
    }
}

export default items