import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import AssetPage from '../../components/asset/asset-page'

const AssetContainer = (props) => WithPageContainer(AssetPage, props, keys.Asset)

export default AssetContainer