import { combineReducers } from 'redux'

import status from './status-bar/reducer'
import auth from './login-page/reducer'
import users from './user-page/reducer'
import items from './item-page/reducer'
import documenttypes from './document-type-page/reducer'
import eventtypes from './event-type-page/reducer'
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
    areaState:areas,
    documentState:documents,
    eventState:events
})