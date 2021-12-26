import {React,useMemo} from 'react';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';
// Custom Select filter based on column values. Used in pearl market item type headers.
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
        <option value="" style={{color:"#000000"}}>All</option>
        {options.map((option, i) => (
          <option key={i} value={option} className='option-list'>
            {option}
          </option>
        ))}
      </select>
     
    )
  }


  //Custom Select filter for profession required column in imperial headers
  export function SelectProfessionFilter({
    column: { filterValue, setFilter},
  }) {
    // Render a multi-select box
    return (
      <div>
        <BsFillInfoCircleFill data-tip="Select the minimum profession level required you want to see." style={{fontSize:"16px",paddingRight:"5px"}}/> 
        <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/>
        <select
          value={filterValue}
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
        >
          <option value="1" style={{color:"#7cb84f"}}>Apprentice</option>
          <option value="2" style={{color:"#0391c4"}}>Skilled</option>
          <option value="3" style={{color:"#f6c232"}}>Professional</option>
          <option value="4" style={{color:"#d42626"}}>Artisan</option>
          <option value="5" style={{color:"#ad3495"}}>Master</option>
          <option value="6" style={{color:"#ff8315"}}>guru</option>
        </select>
      </div>
    )
  }


  

  // filter lower profession boxes based on selected profession
  export function filterProfession(rows, id, filterValue) {
    const mastery =   {
        "apprentice":"1",
        "skilled":"2",
        "professional":"3",
        "artisan":"4",
        "master":"5",
        "guru":"6",
      }
    return  rows.filter(row => {
      const rowValue = row.values[id]
      if (filterValue <= mastery[rowValue]) {
        return rowValue
      }
      else {
        return ""
      }
    
    })
    
  }