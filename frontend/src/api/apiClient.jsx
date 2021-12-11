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

axiosClient.interceptors.response.use(
    function (response) {
      return response;
    }, 
    function (error) {
      let res = error.response;
      console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
    }
  );

export async function getData(endpoint) {
  return axiosClient.get(endpoint)
}

export function addFeedback(endpoint,data) {
  return axiosClient.post(endpoint,)
}


/*
   useEffect(() => {
      GET(URL).then((response) => {
         setData(response.data)
      })
      },[] )
*/