import React from "react"
import StackedBarChart from "./chart.js"
import DayView from "./dayview.js"
import Header from "./header.js"

import data from "../data.json"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data,
      dayview: []
    }
  }

  handleBarClick = index => {
    const singleDay = index
    this.setState({
      dayview: singleDay
    })
  }

  render() {
    return (
      <div>
        <header>
          <Header
            high={this.state.dayview.high} />
        </header>
        <main className="chart-section">
          <div>
            <StackedBarChart
              data={this.state.data}
              handleBarClick={this.handleBarClick} />
          </div>
          <section>
            {this.state.dayview && this.state.data.filter(x =>
              x.date === this.state.dayview.date).map(item => {
              return <DayView
                key={item.index}
                date={item.date}
                high={item.high}
                low={item.low}
                medium={item.medium} />
            })
            }
          </section>
        </main>
      </div>
    )
  }
}

export default App
