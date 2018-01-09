import React from 'react'
import { Panel } from 'react-bootstrap'

/**
 * Shows a panel with an important figure inside. The panel has a
 * title and the value of the figure
 *
 * @since 0.1.0
 */
export class FigurePanel extends React.Component {

    /**
     * Renders the component
     *
     * @return the component
     */
    render() {
        return (
            <Panel header={this.props.title}>
                <h1 className="text-center">{this.props.value}</h1>
            </Panel>
        )
    }
}

export default FigurePanel
