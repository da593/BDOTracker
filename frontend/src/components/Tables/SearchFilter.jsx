import {React,useState} from "react";
import { useAsyncDebounce } from "react-table";


export default function SearchFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (

    <div className="search-bar">
        <input
            value={value || ""}
            onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
            }}
            placeholder={`Search ${count} items...`}
            className="search-input"
        />
    </div>
   
    )
  }