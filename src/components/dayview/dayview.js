import React from "react"
import { PropTypes } from "prop-types"

// assets //
import high from "assets/volume-level-high.svg"
import medium from "assets/volume-level-md.svg"
import low from "assets/volume-level.svg"

import "./dayview.css"

export default class DayView extends React.Component {
  render() {
    return (
      <div className="dayview-text">
        <div>
          <p>Date: {this.props.date}</p>
        </div>
        <div>
          <p><img className="icon-high" src={high} alt="icon for high" />High: {this.props.high}</p>
        </div>
        <div>
          <p><img className="icon-medium" src={medium} alt="icon for medium" />Medium: {this.props.medium}</p>
        </div>
        <div>
          <p><img className="icon-low" src={low} alt="icon for low" />Low: {this.props.low}</p>
        </div>
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
