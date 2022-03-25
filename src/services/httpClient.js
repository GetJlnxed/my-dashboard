import axios from "axios";
let config = {
  baseURL: "http://localhost:3000",
};
const httpClient = axios.create(config);

const authInterceptor = (config) => {
  const authToken = "...";
  config.headers.Authorization = `Bearer ${authToken}`;

  return config;
};

const loggerInterceptor = (config) => {
  return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error);
  },
);

export { httpClient };
