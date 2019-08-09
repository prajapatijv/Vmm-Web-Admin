import { combineReducers } from 'redux'

import status from './status-bar/reducer'
import auth from './login-page/reducer'
import users from './user-page/reducer'
import items from './item-page/reducer'
import documenttypes from './document-type-page/reducer'
import eventtypes from './event-type-page/reducer'
import assets from './asset-page/reducer'
import areas from './area-page/reducer'
import documents from './document-page/reducer'
import events from './event-page/reducer'

export default combineReducers({
    status,
    auth,
    userState: users,
    itemState: items,
    documenttypeState: documenttypes,
    eventtypeState:eventtypes,
    assetState:assets,
    areaState:areas,
    documentState:documents,
    eventState:events
})