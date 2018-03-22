import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import data from "../data.json"

export default class StackedBarChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div>
      <BarChart width={600} height={300} data={data}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="date"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="low" stackId="a" fill="#8884d8" />
         <Bar dataKey="medium" stackId="a" fill="#82ca9d" />
         <Bar dataKey="high" fill="#ffc658" />
      </BarChart>
      )
    }
    </div>
    )
  }
}
