import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "../components/nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      borderBottom: `1px solid #eee`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `5px 10px 20px 10px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `24px`
          }}
        >
          {siteTitle}
        </Link>
      </h1>

    </div>
       <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
