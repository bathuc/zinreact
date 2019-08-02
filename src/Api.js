import axios from 'axios'
function get(uri) { return axios.get(uri) }
function post(uri, params) { return axios.post(uri,params) }

async function aget(uri) {
    try {
        return await axios.get(uri);
    } catch (e) {
        console.log('caught error:', e);
    }
}

async function apost(uri, params = null) {
    try {
        return await axios.post(uri, params);
    } catch (e) {
        console.log('caught error:', e);
    }
}

const api = "http://zinapi.tk/";
const admin = "http://zinapi.tk/admin";
let token = localStorage.getItem('token');
var params = { 'token': token};

export const Auth = {
    getAdmin: async() =>  await apost(admin + 'status', params),
    dashboard: async() =>  await apost(admin + 'dashboard', params),
    login:  async (data) => await apost(admin + "login", data),
    register:  async (data) => await apost(admin + "register", data),
}

function buildQuery(params) {
    let path = Object.keys(params)
        .map(key => params[key] ? `${key}=${params[key]}` : null)
        .filter(item => item != null)
    return path ? `?${path.join('&')}` : ''
}


