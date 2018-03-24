import React from "react"
import { PropTypes } from "prop-types"
import "./dayview.css"

export default class DayView extends React.Component {
  render() {
    return (
      <div className="dayview-text">
        <p>Date: {this.props.date}</p>
        <p>High: {this.props.high}</p>
        <p>Medium: {this.props.medium}</p>
        <p>Low: {this.props.low}</p>
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
