//import { GetCookie, SetCookie, RemoveCookie } from './cookie'
import { GetItem, SetItem, RemoveItem } from './cache'

const THISUSERNAME = 'THISUSERNAME'
const AUTHTOKEN ='AUTHTOKEN_'

export const GetAuth = () => {
    const thisUser = GetItem(THISUSERNAME)
    return GetItem(`${AUTHTOKEN}${thisUser}`) || ""
}

export const SetAuth = (authResponse) => {
    if (authResponse.authToken) {
        const userName = authResponse.userName.toUpperCase()
        SetItem(THISUSERNAME, userName)
        SetItem(`${AUTHTOKEN}${userName}`, authResponse.authToken)
        return true
    } else {
        return false
    }
}

export const RemoveAuth = (userName) => {
    RemoveItem(THISUSERNAME)
    RemoveItem(`${AUTHTOKEN}${userName.toUpperCase()}`)
}