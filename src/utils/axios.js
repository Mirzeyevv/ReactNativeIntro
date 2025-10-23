import axios from "axios";

import { getToken, clearToken } from "./store.js";

import { refreshToken } from "./auth.js";
import { storage } from "./store.js";

const api = axios.create({
    baseURL: 'https://ilkinibadov.com/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(
    storage.set("loading", true),
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

let isRefreshing = false; 
let failedQueue = []; // ugursuz prosesleri bu arrayde saxlayacagiq sonra yeniden yoxlamaq ucun .  Yene alinmasa heqiqeten error kimi gorur

const processQueue = (error, token = null) => { // bu funksiya failedQueue deki butun prosesleri yeniden yoxlayir
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
}

api.interceptors.response.use( 
    storage.set("loading", false),
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers.Authorization = 'Bearer ' + token;
                    return api(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            isRefreshing = true;

            try {
                const newToken = await refreshToken();
                processQueue(null, newToken)
                originalRequest.headers.Authorization = 'Bearer ' + newToken;
                return api(originalRequest)
            } catch (error) {
                processQueue(error, null);
                clearToken();
                return Promise.reject(error);
            }
            finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
)

export default api