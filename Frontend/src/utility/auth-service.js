import { GetCookie, SetCookie, RemoveCookie } from './cookie'

const THISUSERNAME = 'THISUSERNAME'
const AUTHTOKEN ='AUTHTOKEN_'

export const GetAuth = () => {
    const thisUser = GetCookie(THISUSERNAME)
    return GetCookie(`${AUTHTOKEN}${thisUser}`)
}

export const SetAuth = (authResponse) => {
    if (authResponse.authToken) {
        const userName = authResponse.userName.toUpperCase()
        SetCookie(THISUSERNAME, authResponse.userName)
        SetCookie(`${AUTHTOKEN}${userName}`, authResponse.authToken)
        return true
    } else {
        return false
    }
}

export const RemoveAuth = (userName) => {
    RemoveCookie(THISUSERNAME)
    RemoveCookie(`${AUTHTOKEN}${userName.toUpperCase()}`)
}