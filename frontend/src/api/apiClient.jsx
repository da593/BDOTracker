import axios from 'axios';

/*axiosClient handles GET and POST requests and responses 
Setup base URL and headers of the request
*/
const axiosClient = axios.create({
    baseURL:process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_API : process.env.REACT_APP_PROD_API ,
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': process.env.NODE_ENV === "development" ? 'Token' + " " +  process.env.REACT_APP_LOCAL_TOKEN : 'Token' + " " + process.env.REACT_APP_AUTH_KEY,
    }
})


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

export async function getData(endpoint) {
  return axiosClient.get(endpoint)
}

export function addFeedback(endpoint,data) {
  return axiosClient.post(endpoint,)
}


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});