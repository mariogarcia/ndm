import React from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'

const columns = [{
    Header: 'Added',
    accessor: 'published',
    className: 'text-center',
    width: 200
}, {
    Header: 'Name',
    accessor: 'name'
}, {
    Header: 'Link',
    accessor: 'link'
}]


/**
 * Lists all newspapers
 *
 * @since 0.1.0
 */
export const NewspaperTable = ({newspapers}) => (
    <ReactTable
        data={newspapers}
        columns={columns}
        defaultPageSize={10}
        className='-striped -highlight'
        />
)
