import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import ItemPage from '../../components/item/item-page'

const ItemContainer = (props) => WithPageContainer(ItemPage,  props, keys.Item)

export default ItemContainer