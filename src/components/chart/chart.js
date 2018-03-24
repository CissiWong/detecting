import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { PropTypes } from "prop-types"
import "./chart.css"

export default class StackedBarChart extends React.Component {

  onBarClick = index => {
    this.props.handleBarClick(index)
  }

  render() {
    return (
      <ResponsiveContainer>
        <BarChart
          data={this.props.data}
          margin={
            {
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }
          }>
          <XAxis
            dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar
            onClick={this.onBarClick}
            dataKey="high"
            fill="#f15c64"
            barCategoryGap="15%"
            barGap="10%" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

StackedBarChart.propTypes = {
  data: PropTypes.arr
}
