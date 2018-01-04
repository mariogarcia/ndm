import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList
} from 'recharts';

import React from 'react';

const data = [
      {name: 'Nacional', articles: 240},
      {name: 'Internacional', articles: 139},
      {name: 'Deportes', articles: 980},
      {name: 'Tech', articles: 390},
      {name: 'Actualidad', articles: 480},
    {name: 'Economia', articles: 380},
    {name: 'Economia', articles: 380}
];

export class SimpleBarChart extends React.Component {
	render () {
  	    return (
    	    <BarChart width={700} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="articles" fill="#a9d1fc">
                    <LabelList dataKey="articles" position="inside" />
                </Bar>
            </BarChart>
        );
    }
}

export default SimpleBarChart
