//import { GetCookie, SetCookie, RemoveCookie } from './cookie'

import axios from "axios"
import { GetItem, SetItem, RemoveItem } from './cache'

const IsLoggedIn = 'IsLoggedIn'
const THISUSERNAME = 'THISUSERNAME'
const AUTHTOKEN ='AUTHTOKEN_'

export const GetAuth = () => {
    const thisUser = GetItem(THISUSERNAME)
    return GetItem(`${AUTHTOKEN}${thisUser}`) || ""
}


export const GetIsLoggedIn = () => {
    return GetItem(IsLoggedIn)
}


export const SetAuth = (authResponse) => {
    if (authResponse.authToken) {
        const userName = authResponse.userName.toUpperCase()
        SetItem(THISUSERNAME, userName)
        SetItem(`${AUTHTOKEN}${userName}`, authResponse.authToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${GetAuth()}`
        return true
    } else {
        return false
    }
}

export const RemoveAuth = (userName) => {
    RemoveItem(THISUSERNAME)
    RemoveItem(`${AUTHTOKEN}${userName.toUpperCase()}`)
}