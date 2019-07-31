import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import DocumentTypePage from '../../components/document-type/document-type-page'

const DocumentTypeContainer = (props) => WithPageContainer(DocumentTypePage,  props, keys.DocumentType)

export default DocumentTypeContainer