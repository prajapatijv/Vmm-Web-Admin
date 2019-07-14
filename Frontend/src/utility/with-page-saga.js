import { takeLatest, takeEvery } from 'redux-saga/effects'
import { fetch, save, remove } from './http-client'

///Saga Watchers
const withPageSaga = (contextObj) => 
    [    
        takeLatest(`FETCH_${contextObj.actionContext.PLURAL}`, fetchWorker),
        takeEvery(`SAVE_${contextObj.actionContext.SINGULAR}`, saveWorker),
        takeEvery(`DELETE_${contextObj.actionContext.SINGULAR}`, deleteWorker)
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

export default withPageSaga
