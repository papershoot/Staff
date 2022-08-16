import * as Constant from './Constants'

export const loginstart = () => ({
    type: Constant.LOGIN_START
})

export const loginSuccess = (data) => ({
    type: Constant.LOGIN_SUCCESS,
    payload: data
})

export const loginfail = (data) => ({
    type: Constant.LOGIN_FAIL,
    payload: data
})
