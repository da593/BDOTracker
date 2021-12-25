import {React,useMemo} from 'react';
import Tooltip from '../Tooltips/Tooltip';
import {BsFillInfoCircleFill} from 'react-icons/bs';
// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    // Render a multi-select box
    return (
    
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="" style={{color:"#fff"}}>All</option>
        {options.map((option, i) => (
          <option key={i} value={option} className='option-list'>
            {option}
          </option>
        ))}
      </select>
     
    )
  }

  export function SelectMasteryFilter({
    column: { filterValue, setFilter},
  }) {

  
    // Render a multi-select box
    return (
        <select
          value={filterValue}
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
        >
          <option value="0" className="option-list">All</option>
          <option value="1" style={{color:"#b3ff7a"}}>Apprentice</option>
          <option value="2" style={{color:"#0391c4"}}>Skilled</option>
          <option value="3" style={{color:"#f6c232"}}>Professional</option>
          <option value="4" style={{color:"#d42626"}}>Artisan</option>
          <option value="5" style={{color:"#ad3495"}}>Master</option>
          <option value="6" style={{color:"#ff8315"}}>guru</option>
        </select>
    )
  }

  // Define a custom filter filter function!
  export function filterMastery(rows, id, filterValue) {
    const mastery =   {
        "apprentice":"1",
        "skilled":"2",
        "professional":"3",
        "artisan":"4",
        "master":"5",
        "guru":"6",
      }
    return rows.filter(row => {
      const rowValue = row.values[id]
      if (filterValue === "0") {
          return rowValue
      }
      else if (filterValue >= mastery[rowValue]) {
          return rowValue
      }
    })
  }