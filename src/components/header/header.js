import React from "react"
import { PropTypes } from "prop-types"
import logo from "assets/logo_w_text.svg"

import "./header.css"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blinkAnimation: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.high === nextProps.high || this.props.high !== nextProps.high) {
      this.setState({
        blinkAnimation: !this.state.blinkAnimation
      })
    }
  }

  render() {
    return (
      <div className="banner">
        <div className="banner-error">
          <img className="logo" src={logo} alt="detectify logo alien creature peaking out from a cloud" />
          <div className="banner-text">
            <h4 className={this.state.blinkAnimation ? "blink" : "hidden"}>Critical errors: {this.props.high}</h4>
            <h4 className={!this.state.blinkAnimation ? "blink" : "hidden"}>Critical errors: {this.props.high}</h4>
          </div>
          <button className="resolve-btn">
            <a target="_blank" rel="noopener noreferrer" href="https://detectify.com/" alt="link to detectify">
              <p>Resolve</p>
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
