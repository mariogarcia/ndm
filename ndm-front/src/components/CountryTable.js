import React from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'

const columns = [{
    Header: 'Name',
    accessor: 'name',
    className: 'text-center'
},{
    Header: 'Added',
    accessor: 'published',
    className: 'text-center'
}, {
    Header: 'Newspapers',
    accessor: 'noNewspapers',
    className: 'text-center'
},{
    Header: 'Articles',
    accessor: 'noArticles',
    className: 'text-center'
},{
    Header: 'Authors',
    accessor: 'noAuthors',
    className: 'text-center'
}]

export const CountryTable = ({countries, onClick}) => (
    <ReactTable
        data={countries}
        columns={columns}
        defaultPageSize={10}
        getTrProps={(state, rowInfo, column, instance) => ({
            onClick: (e) => onClick(rowInfo.original)
        })}
        className='-striped -highlight'
        />
)
