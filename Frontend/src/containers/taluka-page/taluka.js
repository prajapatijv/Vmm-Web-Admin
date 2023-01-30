import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import TalukaPage from '../../components/taluka/taluka-page'

const TalukaContainer = (props) => WithPageContainer(TalukaPage,  props, keys.Taluka)

export default TalukaContainer