import { STATUS_ACTIONS as C } from '../containers/actionTypes'
import { put } from 'redux-saga/effects'

export function* HandleError (errorType, err)  {
    yield put({"type": C.ADD_ERROR_SUCCESS, payload: err.message})
    yield put({"type": errorType})
}

export function* HandleSuccess (successType, payload)  {
    yield put({ "type": successType, payload: payload })
}

export function* HandleSaveSuccess (typeContext, payload)  {
    const type = `SAVE_${typeContext}_SUCCEED`
    yield put({ "type": type, payload: payload })
    yield put({"type": C.ADD_INFO_SUCCESS, payload: "Saved"})
}


export function* HandleDeleteSuccess (typeContext, id)  {
    const type = `DELETE_${typeContext}_SUCCEED`
    yield put({ "type": type, payload: id })
    yield put({"type": C.ADD_INFO_SUCCESS, payload: "Deleted"})
}

export function* HandleDownloadSuccess (typeContext)  {
    const type = `DOWNLOAD_${typeContext}_SUCCEED`
    yield put({ "type": type })
    yield put({"type": C.ADD_INFO_SUCCESS, payload: `Download complete`})
}

