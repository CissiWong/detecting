import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import DayView from "./dayview.js"

export default class StackedBarChart extends React.Component {

  onBarClick = index => {
    console.log("Bar click", index)
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
            fill="#ffc658">{this.props.data.map(index => <DayView key={index} />)}
          </Bar>
        </BarChart>
      </div>
    )
  }
}
