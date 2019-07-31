import { combineReducers } from 'redux'

import status from './status-bar/reducer'
import auth from './login-page/reducer'
import users from './user-page/reducer'
import items from './item-page/reducer'
import documenttypes from './document-type-page/reducer'
import assets from './asset-page/reducer'

export default combineReducers({
    status,
    auth,
    userState: users,
    itemState: items,
    documenttypeState: documenttypes,
    assetState:assets,
})