import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <div className='Navbar'>
    <Link to="/"><h4>HOME</h4></Link>
    <a href='https://drive.google.com/file/d/1GlhI2zIVMexbReloUiev16CHCz4UbmsM/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
      <h4>RESUME <FaExternalLinkSquareAlt/></h4>
    </a>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/**
<div className='Navbar'>
  <div className='ButtonsContainer'>
    <link to='www.'><button>Dribbble</button></link>
    <link to='www.'><button>LinkedIN</button></link>
    <link to='www.'><button>GitHub</button></link>
    <link to='/about'>ABOUT</link>
    <link to='/resume'>RESUME</link>
  </div>
</div>
**/
