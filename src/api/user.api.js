import { handleResponse } from "./api";

const API_REGISTER_URL = 'http://localhost:8080/register';
const API_LOGIN_URL = 'http://localhost:8080/login';
const API_BASE_URL = "http://localhost:8080/users";


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
    .then(res => {
        if (res.status >= 400) {
            throw Error(res.error);
        }
        return res;
    });
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
        API_BASE_URL, { method: 'GET', 'Content-Type': 'application/json'}
    ).then(r => r.json())
    .then(handleResponse);
}
