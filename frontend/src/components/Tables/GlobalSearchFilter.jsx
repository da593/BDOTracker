import {React,useState} from "react";
import { useAsyncDebounce } from "react-table";

//Add a search filter to find any record in the table that matches the input
export default function GlobalSearchFilter({
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