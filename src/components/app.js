import React from "react"
import StackedBarChart from "./chart.js"
// import data from "../data.json"
import DayView from "./dayview.js"
import data from "../data.json"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data,
      dayview: {}
    }
  }

  handleBarClick = index => {
    const singleDay = index
    // console.log("from app", singleDay)
    this.setState({
      dayview: singleDay
    })
  }

  render() {
    console.log("dayview date", this.state.dayview.date)
    console.log("data date", this.state.data.date)
    return (
      <main>
        <div>
          <StackedBarChart
            data={this.state.data}
            handleBarClick={this.handleBarClick} />
        </div>
        <section>
          {this.state.data.filter((date, index) => (
            this.state.data.date === this.state.dayview.date)).map(day => {
            return <DayView
              key={day.index}
              date={day.date}
              high={day.high}
              low={day.low}
              medium={day.medium} />
          })
          }
        </section>
      </main>
    )
  }
}

export default App
