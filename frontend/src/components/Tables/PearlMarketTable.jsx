// Table.js

import React from "react";
import { usePagination, useTable } from "react-table";

/*The table takes the column header names and the data for each column */
export default function Table({ columns, data, hiddenColumns}) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has grouping
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
    columns,
    data,
    initialState: {
      pageIndex: 0,
      hiddenColumns: hiddenColumns,
      pageSize:10,
    },
  },
    usePagination
    )
 
/*
let color = "white";
if (data.grade == 1) {
    color = '#b3ff7a';
}
else if (data.grade == 2) {
    color = '#0391c4';      
}
else if (data.grade == 3) {
    color = '#f6c232';      
}
else if (data.grade == 4) {
    color = '#ff8315';      
}
*/


  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
    <table {...getTableProps()} className="table-background">
    <thead>
      {// Loop over the header rows
      headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}
        style= {{
          border: "1px solid black",
        }}
        >

          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()} className="table-header">
              {// Render the header
              column.render('Header')}
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
          <tr {...row.getRowProps()}
          className = {row.index % 2 === 0 ? "even-row" : "odd-row"}
          
          >
            {// Loop over the rows cells
            row.cells.map((cell,index) => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()}
                style={{
                  padding:"15px 15px",
                  
                }}
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