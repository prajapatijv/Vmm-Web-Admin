import { put, takeEvery } from 'redux-saga/effects'
import { STATUS_ACTIONS as C } from '../actionTypes'

export const addError = (errorMessage) => ({ type: C.ADD_ERROR, payload: errorMessage })
export const clearErrors = () => ({ type: C.CLEAR_ERRORS })
export const clearInfos = () => ({ type: C.CLEAR_INFOS  })

export function* addErrorSaga() {
    yield takeEvery(C.ADD_ERROR, addErrorWorker)
}

function* addErrorWorker(params) {
    yield put({ "type": C.ADD_ERROR_SUCCESS, payload: params.errorMessage })
}
