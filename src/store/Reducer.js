import * as Constant from './Constants'

const initialState = {
    isfetching: false,
    currentUser: [],
    error: false
}

function UserReducer(state, action) {
    switch (action.type) {
        case Constant.LOGIN_START:
            return {
                ...state,
                isfetching: true
            }
        case Constant.LOGIN_SUCCESS:
            return {
                ...state,
                isfetching: false,
                currentUser: action.payload,
                error: false
            }
        case Constant.LOGIN_FAIL:
            return {
                ...state,
                isfetching: false,
                error: true
            }
        default:
            return state

    }
}
export { initialState }
export default UserReducer