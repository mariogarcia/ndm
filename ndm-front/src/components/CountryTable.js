import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pager, Table } from 'react-bootstrap'

/**
 * Represents a given Country information
 *
 * @since 0.1.0
 */
const CountryRow = ({key, onClick, country}) => (
    <tr>
        <td>{country.id}</td>
        <td>{country.name}</td>
        <td>{country.newspapers}</td>
    </tr>
)

/**
 * Lists all countries
 *
 * @since 0.1.0
 */
export const CountryTable = ({countries, onClick}) => (
    <Table striped bordered condensed hover>
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Newspapers</th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country, index) => (
                <CountryRow key={index} {...country} onClick={() => onClick(country.id)} />
            ))}
        </tbody>
        <tfooter>
            <tr>
                <td colspan="3">
                    <Pager>
		                <Pager.Item previous href="#">
			                &larr; Previous
		                </Pager.Item>
		                <Pager.Item next href="#">
			                Next &rarr;
		                </Pager.Item>
	                </Pager>
                </td>
            </tr>
        </tfooter>
    </Table>
)


CountryTable.propTypes = {
    onClick: PropTypes.func.isRequired
}
