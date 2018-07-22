import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="header navbar navbar-default navbar-static-top">
        <div className="container">
          <h1 className="title">
            <Link to="/">
              Market Hub
            </Link>
          </h1>
        </div>
      </nav>
    )
  }
}
