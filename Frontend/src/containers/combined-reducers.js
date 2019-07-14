import { combineReducers } from 'redux'

import status from './status-bar/reducer'
import auth from './login-page/reducer'
import users from './user-page/reducer'
import items from './item-page/reducer'
import categories from './category-page/reducer'
import assets from './asset-page/reducer'

export default combineReducers({
    status,
    auth,
    userState: users,
    itemState: items,
    categoryState: categories,
    assetState:assets,
})