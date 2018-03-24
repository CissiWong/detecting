import React from "react"
import { PropTypes } from "prop-types"
import logo from "assets/logo_w_text.svg"

import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-banner">
        <div className="banner-error">
          <img className="logo" src={logo} alt="detectify logo alien creature peaking out from a cloud" />
          <p>Total critical errors: {this.props.high}</p>
          <button>Resolve now</button>
        </div>
      </div>
    )
  }
}
Header.propTypes = {
  high: PropTypes.number
}
