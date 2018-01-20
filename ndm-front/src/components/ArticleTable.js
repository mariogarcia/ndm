import React from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'

const columns = [{
    Header: 'Published',
    accessor: 'published',
    width: 200,
    className: 'text-center'
}, {
    Header: 'Title',
    accessor: 'title'
}, {
    Header: 'Category',
    accessor: 'category',
    width: 300,
    className: 'text-center'
}]


/**
 * Lists all articles
 *
 * @since 0.1.0
 */
export const ArticleTable = ({articles}) => (
    <ReactTable
        data={articles}
        columns={columns}
        defaultPageSize={10}
        className='-striped -highlight'
        />
)
