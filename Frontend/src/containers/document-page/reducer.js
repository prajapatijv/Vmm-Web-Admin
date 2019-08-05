import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const documents = (state=initialState, action) => {
    return withPageReducer(keys.Document, state, action, defaultDocument, (criteria) => byName(criteria))
}

const defaultDocument = { 
    id:0,
    title:"",
    description:""
}

const initialState = {
    documents:{
        documents:[],
        documentTypes:[]
    }
} 

const byName = criteria => document => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return document.title.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default documents