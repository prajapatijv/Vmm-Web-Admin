import Cookies from 'js-cookie'

export const SetCookie = (key, value, expires) => Cookies.set(key, value, { expires : expires } )
export const GetCookie = (key) => Cookies.get(key) || ""
export const RemoveCookie = (key) => Cookies.remove(key)
