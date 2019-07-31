import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const documenttypes = (state=initialState, action) => {
    return withPageReducer(keys.DocumentType, state, action, defaultDocumentType, (criteria) => byName(criteria))
}

const defaultDocumentType = { 
    id:0,
    name:"",
    shortName:"",
    active:0
}

const initialState = {
    documenttypes:[]
} 

const byName = criteria => documentType => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return documentType.name.toLowerCase().match(criteria.toLowerCase()) ||     
                documentType.shortName.toLowerCase().match(criteria.toLowerCase())
    }
}

export default documenttypes