//import { GetCookie, SetCookie, RemoveCookie } from './cookie'

import axios from "axios"
import { GetItem, SetItem, RemoveItem } from './cache'

const THISUSERNAME = 'THISUSERNAME'
const AUTHTOKEN ='AUTHTOKEN_'

export const GetAuth = () => {
    const thisUser = GetItem(THISUSERNAME)
    const authToken = GetItem(`${AUTHTOKEN}${thisUser}`) || ""
    if (authToken !== "") {
        SetItem(THISUSERNAME, thisUser)
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
    }

    return authToken !== ""
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

export const GetUserName = () => GetItem(THISUSERNAME)

export const RemoveAuth = (userName) => {
    RemoveItem(THISUSERNAME)
    RemoveItem(`${AUTHTOKEN}${userName.toUpperCase()}`)
}