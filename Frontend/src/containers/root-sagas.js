import { all , call} from "redux-saga/effects"

import { loginSaga, logoutSaga } from '../containers/login-page/sagas'
import withPageSaga from '../utility/with-page-saga'
import { addErrorSaga } from './status-bar/actions'
import { Config } from '../AppConfig'

const {user, item , documenttype, event, eventtype, area, document, popup, query, joinsamiti, state, district } = Config.mappings

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        call(loginSaga),
        call(logoutSaga),
        ...withPageSaga(user),
        ...withPageSaga(item),
        ...withPageSaga(documenttype),
        ...withPageSaga(eventtype),
        ...withPageSaga(event),
        ...withPageSaga(area),
        ...withPageSaga(document),
        ...withPageSaga(popup),
        ...withPageSaga(query),
        ...withPageSaga(joinsamiti),
        ...withPageSaga(state),
        ...withPageSaga(district),
    ])
}