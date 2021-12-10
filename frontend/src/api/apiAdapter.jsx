import axios from 'axios';
var baseURL = ""
process.env.NODE_ENV === "development" ? baseURL= "http://localhost:8000/api": baseURL =  process.env.REACT_APP_API 

export function GET(url){
    return (
        axios.get(url)
        //axios.get(baseURL+url)
    )}

export function POST(url,requestData) {
    return (
        null
        //axios.post(url,requestData)
    )
}

/*
   useEffect(() => {
      GET(URL).then((response) => {
         setData(response.data)
      })
      },[] )
*/