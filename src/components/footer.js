import React from "react"
import Social from "../components/social-buttons"
import { Link } from "gatsby"
import { FaExternalLinkSquareAlt } from "react-icons/fa"

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterButtons">
          <Social
            socialname1="LinkedIn"
            socialname2="Dribbble"
            socialname3="GitHub"
          />
        </div>

        <div className="FooterLinks">
          <Link to="/">
            <h4>HOME</h4>
          </Link>
          <a
            href="https://drive.google.com/file/d/1GlhI2zIVMexbReloUiev16CHCz4UbmsM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              RESUME
              <FaExternalLinkSquareAlt />
            </h4>
          </a>
        </div>

        <div className="Copyrights">
          <p>
            Hafid Errachdi © 2019
            <br />
            Still experimenting with (ﾉ•◡•)ﾉ&nbsp;&nbsp;
            <span className="Joy">*:･ﾟ✧</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
