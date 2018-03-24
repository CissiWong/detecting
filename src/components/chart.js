import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { PropTypes } from "prop-types"

export default class StackedBarChart extends React.Component {

  onBarClick = index => {
    this.props.handleBarClick(index)
  }

  render() {
    return (
      <div>
        <BarChart
          width={600}
          height={300}
          data={this.props.data}
          margin={
            {
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }
          }>
          <XAxis
            dataKey="date" />
          <YAxis />
          <CartesianGrid
            strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar
            onClick={this.onBarClick}
            dataKey="high"
            fill="#f15c64" />
        </BarChart>
      </div>
    )
  }
}

StackedBarChart.propTypes = {
  data: PropTypes.arr
}
