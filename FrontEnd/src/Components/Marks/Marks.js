import React from "react";
import styles from "./Marks.module.css";
import BorderMenu from "./BorderMenu/BorderMenu";

import { useTable } from "react-table";

function Marks(props) {
  const data = React.useMemo(() => [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "react-table",
      col2: "rocks",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: "hi",
    },
  ]);

  const columns = React.useMemo(() => [
    {
      Header: "Course",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Status",
      accessor: "col2",
    },
    {
      Header: "Season",
      accessor: "col3",
    },
    {
      Header: "Semester",
      accessor: "col4",
    },
    {
      Header: "Mark",
      accessor: "col5",
    },

    {
      Header: "Factor",
      accessor: "col6",
    },
  ]);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className={styles.Container}>
    <div className={styles.tablewrapper}>
      <h2> Marks</h2>

      <table className={styles.ftable} {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Marks;
