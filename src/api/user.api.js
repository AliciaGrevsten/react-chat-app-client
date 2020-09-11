import { handleResponse } from "./api";

const API_REGISTER_URL = 'http://localhost:8080/register';
const API_LOGIN_URL = 'http://localhost:8080/login';
const API_USERS_URL = "http://localhost:8080/users";
const API_COLOR_URL = 'http://localhost:8080/users/color';


const createFetchOptions = (method, body) => ({
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });

export const registerUser = (username, password) => {
    return fetch(
        API_REGISTER_URL, 
        createFetchOptions('POST', {
                username, 
                password 
            }
        )
    ).then(r => r.json())
    .then(handleResponse);
}

export const loginUser = (username, password) => {
    return fetch(
        API_LOGIN_URL, 
        createFetchOptions('POST', {
                username, 
                password 
            }
        )
    ).then(r => r.json())
    .then(handleResponse);
}

export const fetchUsers = () => {
    return fetch(
        API_USERS_URL, { method: 'GET', 'Content-Type': 'application/json'}
    ).then(r => r.json())
    .then(handleResponse);
}

export const fetchUserColor = (username) => {
    return fetch(
        API_COLOR_URL + '/' + username, { method: 'GET', 'Content-Type': 'application/json'}
    ).then(r => r.json())
    .then(handleResponse);
}

/* Inte klar
export const changeUserColor = (username, color) => {
    return fetch(
        API_COLOR_URL + '/' + username, createFetchOptions('POST', {
            username, 
            color 
        }
    )
    ).then(r => r.json())
    .then(handleResponse);
} */
