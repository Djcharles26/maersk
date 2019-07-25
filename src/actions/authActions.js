import request from 'superagent';
import { SET_CURRENT_USER } from './types';
import setAutorizationToken from '../utils/setAuthorizationToken';
const jwt = require('jsonwebtoken');


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}


export function login(data){
    return dispatch=>{
        return request.post('https://9becf051.ngrok.io/auth/login', data)
        .then(res => {
            if(res.status===200){
                const token = res.body.token;
                localStorage.setItem('jwtToken',token);
                setAutorizationToken(token);
                dispatch(setCurrentUser(jwt.decode(token)));
            }
        });
    }
}

export function logout(){
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAutorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}