import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const documenttypes = (state=initialState, action) => {
    return withPageReducer(keys.DocumentType, state, action, defaultDocumentType, (criteria) => byName(criteria))
}

const defaultDocumentType = { 
    id:0,
    description:""
}

const initialState = {
    documenttypes:[]
} 

const byName = criteria => documentType => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return documentType.description.toLowerCase().match(criteria.toLowerCase()) 
    }
}

export default documenttypes