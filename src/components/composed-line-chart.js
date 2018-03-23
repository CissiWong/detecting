import React from "react"
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import data from "../data.json"

export default class LineBarAreaComposedChart extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: data
  //   }
  // }
  render() {
    return (
      <div id="container">
      <ResponsiveContainer>
        <ComposedChart
          width={600}
          height={400}
          data={data}
          margin={
            {
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }
          }>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid
            stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="high"
            fill="#ff6d67"
            stroke="#ff6d67" />
          <Bar
            dataKey="low"
            barSize={20}
            fill="#00bffa" />
          <Line
            type="monotone"
            dataKey="medium"
            stroke="#6ebaad" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    )
  }
}
