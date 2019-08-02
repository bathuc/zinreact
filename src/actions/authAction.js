import { Auth } from "../Api";
import axios from "axios";

export const UPDATE_AUTH_STATUS = 'UPDATE_AUTH_STATUS';

export const updateAuthStatus = (isAuthen = false, user = null, token = null) => ({
    type: UPDATE_AUTH_STATUS,
    isAuthen: isAuthen,
    user: user,
    token: token
});

export const checkAuthStatus = () => async (dispatch) => {
    try {
        let token = localStorage.getItem("token") ? localStorage.getItem("token") : false;
        console.log('token_check', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let getAdminUri = 'http://zinapi.tk/admin/get-admin';
        const adminRespond = await axios.post(getAdminUri);
        const admin = adminRespond.data;
       dispatch(updateAuthStatus(true, admin, token))
    } catch (e) {
        dispatch(updateAuthStatus(false, null, null))
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.clear();
    console.log('remove token', localStorage.getItem('token'));
    axios.defaults.headers.common['Authorization'] = null;
    dispatch(updateAuthStatus(false, null, null))
}


