import { call, put, delay } from 'redux-saga/effects'
import axios from "axios"
import { GetItem, SetItem, RemoveItem } from './cache'
import { HandleSuccess, HandleError, HandleSaveSuccess, HandleDeleteSuccess } from './status'
import { navigate } from '@reach/router'

axios.defaults.headers.post['Content-Type'] = 'application/json'


const fetchApi = (apiUrl) => axios.get(`${apiUrl}`)
const saveApi = (apiUrl, payload) => {
    return axios({ method: 'post', url: apiUrl, data: payload });
}
const deleteApi = (apiUrl, id) => axios.delete(`${apiUrl}/${id}`)


export function* fetch(params, throttle = false) {

    const contextObj = params.contextObj

    try {
        if (throttle && params.criteria !== "") { yield delay(500) }

        const apiUrl = GetApiUrl(params)
        var cached = GetItem(contextObj.actionContext.PLURAL) 
        
        const response = (cached === null || params.criteria === "") ? yield (call(fetchApi, apiUrl)) : cached
        const data = (cached === null || params.criteria === "") ? response.data : cached

        yield put({ "type": `FETCH_${contextObj.actionContext.PLURAL}_SUCCEED`, payload: { data: data, criteria: params.criteria } })

        //Load cache
        SetItem(contextObj.actionContext.PLURAL, data) 

    } catch (error) {
        yield HandleError(`FETCH_${contextObj.actionContext.PLURAL}_FAILED`, error)
    }
}


export function* save(params) {
    
    const contextObj = params.contextObj

    try {
        const apiUrl = GetApiUrl(params)
        const response = yield (call(saveApi, apiUrl, params.entity))

        yield HandleSaveSuccess(contextObj.actionContext.SINGULAR, response.data)

        //Cleanup cache
        RemoveItem(contextObj.actionContext.PLURAL) 

        //Navigate route
        if (undefined !== response.data.id)
            navigate(`/${contextObj.apiContext}/${response.data.id}`)
            
    } catch (error) {
        yield HandleError(`SAVE_${contextObj.actionContext.SINGULAR}_FAILED`, error)
    }
}

export function* remove(params) {

    const contextObj = params.contextObj

    try {
        const apiUrl = GetApiUrl(params)
        yield (call(deleteApi, apiUrl, params.id))

        yield HandleDeleteSuccess(contextObj.actionContext.SINGULAR, params.id)

        //Cleanup cache
        RemoveItem(contextObj.actionContextPlural) 
        
        //Navigate route
        navigate(`/${contextObj.apiContext}`)
    } catch (error) {
        yield HandleError(`DELETE_${contextObj.actionContext.SINGULAR}_FAILED`, error)
    }
}

export function* post(apiUrl, payload, successType, errorType) {

    try {
        const response = yield (call(saveApi, apiUrl, payload))

        yield HandleSuccess(successType, response.data)

        return response.data;
            
    } catch (error) {
        yield HandleError(errorType, error)
    }
}

const GetApiUrl = (params) => {
    return `${params.config.API_URL}/${params.contextObj.apiContext}`
}