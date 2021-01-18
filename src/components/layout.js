import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { siteMetadata } from "../../gatsby-config"

class Layout extends React.Component {
  render() {
    const { title, social, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const ColoredLine = ({ color }) => (<hr style = {{ color: color, backgroundColor: color, height: 3 }} /> );

    let header
    header = (
      <h3 style={{ fontFamily: `Montserrat, sans-serif`, marginTop: 0, marginBottom: `0.5rem`, fontSize: '2.5rem',}} >
        <Link style={{ boxShadow: `none`, textDecoration: `none`, color: `inherit`, }} to={`/`} >
          {title}
        </Link>
      </h3>
    )
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <ul>
            <ui><Link to={siteMetadata.social.github.url + siteMetadata.social.github.name}>github</Link></ui>
            <ui><Link to={siteMetadata.social.twitter.url + siteMetadata.social.twitter.name}>twitter</Link></ui>
          </ul>
          <ColoredLine color="#8fbd89" />
          <main>{children}</main>
        </div>
        <Footer>
            © 2021{new Date().getFullYear() > 2021 && (<span> - {new Date().getFullYear()}</span>)},{`　`}{title}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
