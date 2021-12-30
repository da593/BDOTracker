import axios from 'axios';

/*
Setup base URL and headers of the request
*/
const axiosClient = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_API : process.env.REACT_APP_PROD_API ,
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_TOKEN : process.env.REACT_APP_AUTH_KEY,
    },
})


//GET Method
export async function getData(endpoint) {
  return await axiosClient.get(endpoint)
}

//POST Method
export function addFeedback(data) {
  return axiosClient.post("/cooking",data)
}

// Response interceptor
axiosClient.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    function (response) {
      return response;
    }, 
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});