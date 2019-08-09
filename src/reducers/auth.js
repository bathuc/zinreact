import { UPDATE_AUTH_STATUS, UPDATE_USER_INFO } from '../actions/authAction';

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
        case UPDATE_USER_INFO:
            localStorage.setItem('user', action.user);
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
