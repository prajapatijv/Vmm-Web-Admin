import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import DocumentPage from '../../components/document/document-page'

const DocumentContainer = (props) => WithPageContainer(DocumentPage,  props, keys.Document)

export default DocumentContainer