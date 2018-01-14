import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'

import styles from './CountryTable.css'

/**
 * Represents a given Country information
 *
 * @since 0.1.0
 */
const CountryRow = ({country, onDelete, onEdit}) => (
    <tr>
        <td className="id">
            <Link to={"/country/" + country.id}>{country.id}</Link>
        </td>
        <td><Link to={"/country/" + country.id}>{country.name}</Link></td>
        <td>
            <NumberFormat
                value={country.noNewspapers}
                thousandSeparator={true}
                displayType="text"/>
        </td>
        <td>
            <NumberFormat
                value={country.noArticles}
                thousandSeparator={true}
                displayType="text"/>
        </td>
        <td>
            <NumberFormat
                value={country.noAuthors}
                thousandSeparator={true}
                displayType="text"/>
        </td>
    </tr>
)

/**
 * Lists all countries
 *
 * @since 0.1.0
 */
export const CountryTable = ({countries, onEdit, onDelete}) => (
    <Table striped bordered condensed hover>
		<thead>
			<tr>
				<th className={styles.id}>#</th>
				<th>Name</th>
				<th>Newspapers</th>
                <th>Articles</th>
                <th>Authors</th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country, index) => (
                <CountryRow
                    key={index}
                    country={country}
                    onDelete={onDelete}
                    onEdit={onEdit}/>
            ))}

        </tbody>
    </Table>
)


CountryTable.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}
