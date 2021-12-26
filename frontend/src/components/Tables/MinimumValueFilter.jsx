import {React,useMemo} from 'react';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';

// This is a custom UI to filter rows with values less than the input
export function MinimumValueFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id },
  }) {
    const [min] = useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
      })
      return [min]
    }, [id, preFilteredRows])
  
    return (
      <div>
        <BsFillInfoCircleFill data-tip="Hide items that have less items on the market than your inputted amount" style={{fontSize:"16px",paddingRight:"5px"}}/> 
        <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/>
        <input
          value={filterValue[0] || ''}
          type="number"
          onChange={e => {
            const val = e.target.value
            setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
          }}
          placeholder={`Min (${min})`}
          style={{
            width:"70px",
          }}
        />
      </div>
    )
  }

  export // Define a custom filter filter function!
  function filterGreaterThan(rows, id, filterValue) {
    return rows.filter(row => {
      const rowValue = row.values[id]
      return rowValue >= filterValue
    })
  }