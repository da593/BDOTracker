// Table.js
import React from "react";
import {useTable,useFilters,useGlobalFilter,usePagination, useSortBy } from "react-table";
import GlobalSearchFilter from "./GlobalSearchFilter";
import {BsFillCaretDownSquareFill} from 'react-icons/bs'
import {BsFillCaretUpSquareFill} from 'react-icons/bs'
import { DefaultColumnFilter } from "./DefaultColumnFilter";
import {BsFillInfoCircleFill} from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';

// Create a default prop getter
const defaultPropGetter = () => ({})
// Define a default UI for filtering

/*The table takes the column header names and the data for each column */
export default function Table({
   columns, 
   data, 
   getHeaderGroupProps = defaultPropGetter,
   getHeaderProps = defaultPropGetter,
   getRowProps = defaultPropGetter,
   getCellProps = defaultPropGetter,
  }) {
  
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has grouping
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // Additional Pagination options
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    state: { pageIndex, pageSize},
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
    columns,
    data,
    defaultColumn, // Be sure to pass the defaultColumn option
    initialState: {

      pageIndex: 0,
      pageSize:10,
      hiddenColumns:  columns
      .filter(col => col.show === false)
      .map(col => col.accessor),
    sortBy: [
      {
        id:"weekly_sale",
        desc:true,
      },
      {
        id:"total_profit",
        desc:true,
      },
      {
        id:"market",
        desc:true,
      },
    ],
    },
  },
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
    )
 

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
    
    <GlobalSearchFilter
      preGlobalFilteredRows={preGlobalFilteredRows}
      globalFilter={state.globalFilter}
      setGlobalFilter={setGlobalFilter}
    />
    <table {...getTableProps()} className="table-background">
    <thead>
      {// Loop over the header rows
      headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps(
          getHeaderGroupProps(headerGroup)
          )}>
          {// Loop over the headers in each row
          headerGroup.headers.map((column,index) => (
            // Apply the header cell props
            <th {...column.getHeaderProps(
                getHeaderProps(column),
            )}>
              <span {...column.getSortByToggleProps()}> 
              
              {headerGroup.headers[index].toolTip && (
                  <span><BsFillInfoCircleFill data-tip={headerGroup.headers[index].toolTip} style={{fontSize:"16px",paddingRight:"5px"}}/> 
                  <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/></span>
              )}
              {column.render('Header')}
                {column.isSorted
                  ? column.isSortedDesc
                    ?<BsFillCaretDownSquareFill style={{marginLeft:"5px"}}/>
                    :<BsFillCaretUpSquareFill style={{marginLeft:"5px"}}/>
                  : ''}

              </span>
                  
              <div className="column-filter">{column.canFilter ? column.render('Filter') : null}</div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
    {/* Apply the table body props */}
    <tbody {...getTableBodyProps()}>
      {// Loop over the table rows
      page.map(row => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps(
            getRowProps(row)
          )}
          
          >
            {// Loop over the rows cells
            row.cells.map((cell,index) => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps(
                  getCellProps(cell)
                )}
                
                >
                  
                  {// Render the cell contents
                  cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  
  <div className="pagination">
  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    {'<<'}
  </button>{' '}
  <button onClick={() => previousPage()} disabled={!canPreviousPage}>
    {'<'}
  </button>{' '}
  <button onClick={() => nextPage()} disabled={!canNextPage}>
    {'>'}
  </button>{' '}
  <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    {'>>'}
  </button>{' '}
  <span>
    Page{' '}
    <strong>
      {pageIndex + 1} of {pageOptions.length}
    </strong>{' '}
  </span>
  <span>
    | Go to page:{' '}
    <input
      type="number"
      defaultValue={pageIndex + 1}
      onChange={e => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0
        gotoPage(page)
      }}
      style={{ width: '100px' }}
    />
  </span>{' '}
  <select
    value={pageSize}
    onChange={e => {
      setPageSize(Number(e.target.value))
    }}
  >
    {[10, 20, 30, 40, 50].map(pageSize => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select>
</div>
  </>
  );
}