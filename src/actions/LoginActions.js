import axios from 'axios';

export const LoginStart = (user) => {
    return {
        type: 'LOGIN_USER',
        payload: user
    }
}

export const LoginError = (err) => {
    return {
        type: 'LOGIN_USER_ERROR',
        payload: err
    }
}

export const LoginUser = (email, password) => {
    return dispatch => {
        axios.post("http://localhost:3001/api/user/login", {email, password})
        .then(res => {
            localStorage.setItem('user', res.data.a)
        })
    }
}