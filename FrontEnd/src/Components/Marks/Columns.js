import React from 'react'


  Columns = React.useMemo(
    () => [
      {
        Header: 'Course',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Status',
        accessor: 'col2',
      },
      {
        Header: 'Season',
        accessor: 'col3',
      },
      {
        Header: 'Semester',
        accessor: 'col4',
      },
      {
        Header: 'Mark',
        accessor: 'col5',
      },

      {
        Header: 'Factor',
        accessor: 'col6',
      },
      
    ],
    []
  )

  