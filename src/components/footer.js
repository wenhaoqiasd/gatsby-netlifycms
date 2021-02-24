import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./footer.css"
import navbar from "./nav.json"

const PageFooter = () => {

  const data = useStaticQuery(graphql`
    query siteTitle {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="footer">
      <a className="header-logo footer-logo" href="/">
        {data.site.siteMetadata?.title || `Title`}<span>{data.site.siteMetadata?.author}</span>
      </a>
      <div className="footer-nav">
        {navbar.page.map(list => (
          <Link key={list.key} to={list.link} className="action">
            {list.name}
          </Link>
        ))}
      </div>
      <div className="footer-nav">
        {navbar.social.map(list => (
          <a key={list.key} href={list.link} target="_blank" rel="noopener noreferrer" className="action">
            {list.name}
          </a>
        ))}
      </div>
      <div className="footer-nav">
        {navbar.person.map(list => (
          <a key={list.key} href={list.link} className="action">
            {list.name}
          </a>
        ))}
      </div>
      <p className="footer-text action">
        © {new Date().getFullYear()}{" "}
      </p>
    </div>
  )
}
export default PageFooter