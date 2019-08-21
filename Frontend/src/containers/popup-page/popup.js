import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import PopupPage from '../../components/popup/popup-page'

const PopupContainer = (props) => WithPageContainer(PopupPage,  props, keys.Popup)

export default PopupContainer