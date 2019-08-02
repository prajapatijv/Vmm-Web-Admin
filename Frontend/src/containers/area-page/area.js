import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import AreaPage from '../../components/area/area-page'

const AreaContainer = (props) => WithPageContainer(AreaPage,  props, keys.Area)

export default AreaContainer