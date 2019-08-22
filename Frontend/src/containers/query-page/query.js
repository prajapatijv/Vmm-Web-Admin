import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import QueryPage from '../../components/query/query-page'

const QueryContainer = (props) => WithPageContainer(QueryPage,  props, keys.Query)

export default QueryContainer