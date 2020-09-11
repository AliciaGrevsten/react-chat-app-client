import { handleResponse } from "./api";

const API_REGISTER_URL = 'http://localhost:8080/register';
const API_LOGIN_URL = 'http://localhost:8080/login';
const API_USERS_URL = "http://localhost:8080/users";


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
