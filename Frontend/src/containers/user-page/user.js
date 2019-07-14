import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import UserPage from '../../components/user/user-page'

const UserContainer = (props) => WithPageContainer(UserPage, props, keys.User)

export default UserContainer