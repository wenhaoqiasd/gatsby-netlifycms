import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import navbar from "./nav.json"

const Loop = ({ footerLink }) => {

  const [progress, setProgress] = useState(1000)
  const handleScroll = useCallback(() => {
    var totalH =
      document.body.scrollHeight || document.documentElement.scrollHeight
    var clientH = window.innerHeight || document.documentElement.clientHeight
    var validH = totalH - clientH
    var scrollH =
      document.body.scrollTop || document.documentElement.scrollTop
    var result = ((scrollH / validH) * 100 * 3.6).toFixed(0)
    setProgress(result)
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [
    handleScroll
  ])

  const data = useStaticQuery(graphql`
    query siteTitleLoop {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="circular">
      <style>
        {`
        .circular {
          position: relative;
          width: 12.625rem;
          height: 12.625rem;
          padding: 1rem;
          font-size: 0.875rem;
        }
        .circular svg{
          display: block;
          letter-spacing: 0.1rem;
          font-weight: 500;
          overflow: visible;
          transform: rotate(-32deg);
          fill: var(--Text-3);
          text-transform: uppercase;
        }
        .circular path {
          fill: none;
          text-align: center;
        }
        .footer-link {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .footer-link a {
          margin: 0.25rem 0;
        }
        .footer-link p {
          margin: 0;
          font-weight: 500;
        }
      `}
      </style>
      <svg viewBox="0 0 170 170" className="circular-big" style={{ transform: "rotate(" + progress + "deg)" }}>
        <path d="M 0,85 a 85,85 0 1,1 0,1 z" id="c-1" />
        <path d="M 0,85 a 85,85 0 1,1 0,1 z" id="c-2" />
        <text>
          <textPath xlinkHref="#c-1">
            {data.site.siteMetadata?.title || `Title`}{" "}{data.site.siteMetadata?.author} © {new Date().getFullYear()}
          </textPath>
          <textPath startOffset="265" xlinkHref="#c-2">
            All Rights Reserved
        </textPath>
        </text>
      </svg>
      <div className="footer-link" style={{ display: footerLink }}>

        {navbar.page.map(list => (
          <Link key={list.key} to={list.link}>
            {list.name}
          </Link>
        ))}

      </div>
    </div>
  )
}

Loop.propTypes = {
  ooterLink: PropTypes.string
}
Loop.defaultProps = {
  ooterLink: ``
}
export default Loop
