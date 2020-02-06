/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import PageTransition from "gatsby-plugin-page-transitions"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageTransition
        transitionStyles={{
          entering: { opacity: "1" },
          entered: { opacity: "1" },
          exiting: { opacity: "0" },
        }}
        transitionTime={1600}
      >
        <div>
          <main>{children}</main>
        </div>
      </PageTransition>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
