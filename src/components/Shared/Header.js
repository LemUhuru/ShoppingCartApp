import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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


export default Header
