import React from 'react'

import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line,
    ResponsiveContainer
} from 'recharts'

export const CountryEvolutionPanel = ({evolution}) => (
    <ResponsiveContainer height={300} width='100%'>
    	<LineChart height={300} data={evolution}
                   margin={{top: 30, right: 30, left: 20, bottom: 10}}>
            <XAxis dataKey="published"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
)
