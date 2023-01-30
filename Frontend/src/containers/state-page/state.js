import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import StatePage from '../../components/state/state-page'

const StateContainer = (props) => WithPageContainer(StatePage,  props, keys.State)

export default StateContainer