import { call, takeEvery, put } from 'redux-saga/effects'
import { LOGIN_ACTIONS as C } from '../actionTypes'
import { STATUS_ACTIONS as S } from '../actionTypes'
import { post } from '../../utility/http-client'
import { SetAuth, RemoveAuth } from '../../utility/auth-service'

import { navigate } from '@reach/router'

import { Config } from '../../AppConfig'

const LOGIN_URL =  `${Config.API_URL}/authenticate`

export function* loginSaga() {
    yield takeEvery(C.LOGIN, loginWorker)
}

export function* logoutSaga() {
    yield takeEvery(C.LOGOUT, logoutWorker)
}


function* loginWorker(params) {

    const response = yield(call(post, LOGIN_URL, params.payload, C.LOGIN_SUCCESS, C.LOGIN_FAILURE))
    
    if (SetAuth(response))  {
        navigate('/')
    }
    else  {
        yield put({"type": S.ADD_ERROR_SUCCESS, payload: "Invalid username or password"})
    }
}

function* logoutWorker(params) {
    RemoveAuth(params.payload.userName)
    yield put({"type": C.LOGOUT_SUCCESS});
    
    navigate('/login')
}