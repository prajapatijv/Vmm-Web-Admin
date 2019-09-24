import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const documents = (state=initialState, action) => {
    var documentState = withPageReducer(keys.Document, state, action, defaultDocument, (criteria) => byName(criteria))

    switch (action.type) {
        case `FETCH_DOCUMENTS_SUCCEED`: {
            return {...documentState, "documenttypes": action.payload.data.documenttypes }
        }

        default:
            return documentState
    }
}

const defaultDocument = { 
    id:0,
    title:"",
    description:"",
    publishDate:"",
    expiryDate:"",
    documentPath:"",
    documentTypeId:0,
    groupYear:0
}

const initialState = {
    documents:[],
    documentTypes:[]
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