import React from "react"

export default class DayView extends React.Component {
  render() {
    return (
      <div>
        <h1>High:{this.props.high}</h1>
        <h1>Low:{this.props.low}</h1>
        <h1>Medium:{this.props.medium}</h1>
      </div>
    )
  }
}
