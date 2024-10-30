// import axios from 'axios';


// const apiClient = axios.create({
//     baseURL: 'https://fakestoreapi.com/users', 
// });
// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// export default apiClient;






import axios, { AxiosError } from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', 
});


api.interceptors.request.use(
    (config) => {
        
        config.headers['Authorization'] = 'Bearer YOUR_TOKEN'; 
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(new Error(error.message));
    }
);


api.interceptors.response.use(
    (response) => {
    
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(new Error(error.message));
    }
);

export default api;

