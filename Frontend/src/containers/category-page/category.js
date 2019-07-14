import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import CategoryPage from '../../components/category/category-page'

const CategoryContainer = (props) => WithPageContainer(CategoryPage,  props, keys.Category)

export default CategoryContainer