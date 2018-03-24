import React from "react"
import { PropTypes } from "prop-types"
import logo from "assets/logo_w_text.svg"

import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-error">
          <img className="logo" src={logo} alt="detectify logo alien creature peaking out from a cloud" />
          <div className="banner-text">
            <p>Critical errors: {this.props.high}</p>
          </div>
          <button className="resolve-btn">
            <a href="https://detectify.com/" alt="link to detectify" target="_blank" rel="noopener norefferer">
              <p>Resolve now</p>
            </a>
          </button>
        </div>
      </div>
    )
  }
}
Header.propTypes = {
  high: PropTypes.number
}
