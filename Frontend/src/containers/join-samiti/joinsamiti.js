import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import JoinSamitiPage from '../../components/join-samiti/joinsamiti-page'

const JoinSamitiContainer = (props) => WithPageContainer(JoinSamitiPage,  props, keys.JoinSamiti)

export default JoinSamitiContainer