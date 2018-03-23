import React from "react"
import StackedBarChart from "./chart.js"
// import data from "../data.json"
import DayView from "./dayview.js"

const data = require("../data.json")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data
    }
  }

  render() {
    return (
      <main>
      <div>
        <StackedBarChart
          data={this.state.data} />
      </div>
      <div>
        {this.state.data.map(day => {
        return <DayView
          date={day.date}
          high={day.high}
          low={day.low}
          medium={day.medium}
        />})}
      </div>
      </main>
    )
  }
}

export default App
