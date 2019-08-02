import { UPDATE_AUTH_STATUS } from '../actions/authAction';

export function auth(state = {
    isLoggedIn: localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") : false,
    user: localStorage.getItem("user") ? localStorage.getItem("user") : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : false
}, action) {
    switch (action.type) {
        case UPDATE_AUTH_STATUS:
            localStorage.setItem("isLoggedIn", action.isAuthen)
            localStorage.setItem('user', action.user);
            localStorage.setItem('token', action.token);
            return {
                ...state,
                isLoggedIn: action.isAuthen,
                user: action.user,
                token: action.token,
            }
        default:
            return state
    }
}
