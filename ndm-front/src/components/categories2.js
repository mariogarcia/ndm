import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
    Pie,
    PieChart,
    Sector, Cell
} from 'recharts';

import React from 'react';

const data = [{name: 'Love', value: 400}, {name: 'Hate', value: 300}];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Articles ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export class TwoLevelPieChart extends React.Component {

	constructor() {
        super();
        this.state = {
            activeIndex: 0,
        };

        this.onPieEnter = this.onPieEnter.bind(this);
    }

    componentDidMount() {
        this.setState({activeIndex: 0});
    }

    onPieEnter(data, index) {
        this.setState({ activeIndex: index });
    }

	render () {
  	    return (
    	    <PieChart width={600} height={300}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={160}
                    cy={135}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    fill="rgb(169, 209, 252)"
                    onMouseEnter={this.onPieEnter}>
                    {
                        data.map((entry, index) => <Cell key='cell' fill={entry.name === 'Love' ? 'rgb(169, 209, 252)' : 'red'} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}
