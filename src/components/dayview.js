import React from "react"
import { PropTypes } from "prop-types"

export default class DayView extends React.Component {
  render() {
    return (
      <div>
        <h1>Date: {this.props.date}</h1>
        <h1>High: {this.props.high}</h1>
        <h1>Medium: {this.props.medium}</h1>
        <h1>Low: {this.props.low}</h1>
      </div>
    )
  }
}

DayView.propTypes = {
  high: PropTypes.number,
  low: PropTypes.number,
  medium: PropTypes.number,
  date: PropTypes.string
}
