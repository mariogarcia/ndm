import React from 'react'
import { Table } from 'react-bootstrap'

/**
 * Represents a given Newspaper information
 *
 * @since 0.1.0
 */
const NewspaperRow = ({newspaper}) => (
    <tr>
        <td className="id">{newspaper.id}</td>
        <td>{newspaper.name}</td>
        <td>{newspaper.link}</td>
    </tr>
)

/**
 * Lists all newspapers
 *
 * @since 0.1.0
 */
export const NewspaperTable = ({newspapers}) => (
    <Table striped bordered condensed hover>
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Link</th>
            </tr>
        </thead>
        <tbody>
            {newspapers.map((newspaper, index) => (
                <NewspaperRow key={index} newspaper={newspaper}/>
            ))}
        </tbody>
    </Table>
)
