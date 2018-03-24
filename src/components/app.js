import React from "react"
import Header from "components/header/header.js"
import DayView from "components/dayview/dayview.js"
import StackedBarChart from "components/chart/chart.js"

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
          <div className="barchart">
            <StackedBarChart
              width="75%"
              height="50%"
              data={this.state.data}
              handleBarClick={this.handleBarClick} />
          </div>
          <section className="dayview-container">
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
