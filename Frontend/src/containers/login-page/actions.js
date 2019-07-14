import { LOGIN_ACTIONS as C } from '../actionTypes'

export const login = (credentials) => ({ type: C.LOGIN, payload: credentials })
export const logout = (auth) => ({ type: C.LOGOUT, payload: auth })