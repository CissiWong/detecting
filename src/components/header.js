import React from "react"
import { PropTypes } from "prop-types"


export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div>Total critical errors: {this.props.high}</div>
        <button>Resolve now</button>
      </div>
    )
  }
}
Header.propTypes = {
  high: PropTypes.number
}
