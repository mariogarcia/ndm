import React from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'

const columns = [{
    Header: 'Name',
    accessor: 'name',
    className: 'text-center'
},{
    Header: 'Link',
    accessor: 'link',
    className: 'text-center'
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
