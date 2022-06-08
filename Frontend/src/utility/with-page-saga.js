import { takeLatest, takeEvery } from 'redux-saga/effects'
import { fetch, save, remove, download } from './http-client'

///Saga Watchers
const withPageSaga = (contextObj) => 
    [    
        takeLatest(`FETCH_${contextObj.actionContext.PLURAL}`, fetchWorker),
        takeEvery(`SAVE_${contextObj.actionContext.SINGULAR}`, saveWorker),
        takeEvery(`DELETE_${contextObj.actionContext.SINGULAR}`, deleteWorker),
        takeLatest(`DOWNLOAD_${contextObj.actionContext.PLURAL}`, downloadWorker),
    ]

///Saga Worker functions
function* fetchWorker(params) {
    yield* fetch(params, true)
}

function* saveWorker(params) {
    yield* save(params)
}

function* deleteWorker(params) {
    yield* remove(params)
}

function* downloadWorker(params) {
    yield* download(params)
}

export default withPageSaga
