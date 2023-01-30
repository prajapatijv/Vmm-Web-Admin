import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import DistrictPage from '../../components/district/district-page'

const DistrictContainer = (props) => WithPageContainer(DistrictPage,  props, keys.District)

export default DistrictContainer