//src/utils/api.js

// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_URL;

// // ✅ Axios instance (common for all requests)
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ✅ Generic request handler
// const request = async (method, url, data = null, config = {}) => {
//   try {
//     const response = await api({ method, url, data, ...config });
//     return response.data; // just return data 
//   } catch (error) {
//     console.error(`API ${method.toUpperCase()} ${url} error:`, error);
//     throw error;
//   }
// };

// export default request;














//src/utils/api.ts
import axios, { AxiosRequestConfig, Method } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

// ✅ Axios instance (common for all requests)
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Generic request handler
const request = async <T>(
  method: Method,
  url: string,
  data: unknown = null,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response = await api({ method, url, data, ...config });
    return response.data as T; // just return data
  } catch (error) {
    console.error(`API ${method.toUpperCase()} ${url} error:`, error);
    throw error;
  }
};

export default request;
