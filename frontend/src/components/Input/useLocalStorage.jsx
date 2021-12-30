import {React,useState,useEffect} from 'react';

function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
  }

/*Custom hook for getting values from local storage: custom hooks should always start with useXXXX*/
export const useLocalStorage = (key,defaultValue) => {
    const [value,setValue] = useState(() => {
        return getStorageValue(key,defaultValue)
    })

    useEffect (() => {
        //Store input
        
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

    return [value,setValue]
}

