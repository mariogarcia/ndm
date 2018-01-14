import React from 'react'
import { Panel } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

/**
 * Shows a panel with an important figure inside. The panel has a
 * title and the value of the figure
 *
 * @since 0.1.0
 */
export const FigurePanel = ({title, value}) => (
    <Panel header={title}>
        <h1 className="text-center">
            <NumberFormat
                value={value}
                thousandSeparator={true}
                displayType="text"/>
        </h1>
    </Panel>
)

export default FigurePanel
