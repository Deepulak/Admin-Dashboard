import axios from "axios";

const BASE_URL = "http://locahost:5000/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});


//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzljZjFjNjRmZGUzYzU4Y2U1ZjRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODIzMDU5MywiZXhwIjoxNjQ4NDg5NzkzfQ.mF0vwhcLrvqex34-9S51ajof9YzSqxdAnohFR6unuqg";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken; 

