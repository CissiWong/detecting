import React from "react"
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import data from "../data.json"

export default class SimpleBarChart extends React.Component {
  render() {
  	return (
      <div id="container">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis
         dataKey="date" />
       <YAxis/>
       <CartesianGrid
         strokeDasharray="3 3" />
       <Tooltip/>
       <Legend
         verticalAlign="top"
         wrapperStyle={{lineHeight: '40px'}} />
       <ReferenceLine
         y={0}
         stroke='#000'/>
       <Brush
         dataKey="date"
         height={30}
         stroke="#8884d8"/>
       <Bar dataKey="high" fill="#8884d8" />
       <Bar dataKey="medium" fill="#82ca9d" />
       <Bar dataKey="low" fill="#82ca9d" />
      </BarChart>
      </div>
    )
  }
}
