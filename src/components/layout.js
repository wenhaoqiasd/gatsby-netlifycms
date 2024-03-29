import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import SplitText from "../components/splittext"
import PageUp from "../components/page-up"

import { useAuth } from "gatsby-theme-firebase"

import navbar from "./nav.json"

import "./layout.css"
import "./header.css"

const Layout = ({ children }) => {

  const { isLoading, isLoggedIn, profile } = useAuth()
  // 查询
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        buildTime(formatString: "MMMM DD, YYYY hh:mm a z")
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  // 样式切换
  const [open, setOpen] = useState(false)
  // 滚动
  const handleScroll = useCallback(() => {
    var pageup = document.getElementById("content-main");
    if (window.pageYOffset >= 80) {
      pageup.classList.add("up-scroll");
    } else {
      pageup.classList.remove("up-scroll");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [
    handleScroll
  ])
  return (
    <>
      <header className={`header${open === true ? " open-menu" : ""}`}>
        {/* 常显 */}
        <div className="header-content">
          <a className="header-logo" href="/">
            {data.site.siteMetadata?.title || `Title`}<span>{data.site.siteMetadata?.author}</span>
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          aria-expanded={open === true ? "true" : "false"}
          className="menu-btn"
          role="button"
          tabIndex={-1}
          onKeyPress={() => { }}
        >
        </div>
        {/* 菜单 */}
        <div className="header-bg">
          {/* 链接 */}
          <span className="menu-link">
            {navbar.page.map(list => (
              <Link key={list.key} to={list.link} className="nav-title">
                <SplitText copy={list.name} />
                <SplitText copy={list.name} />
              </Link>
            ))}
          </span>
          {/* 尾部信息 */}
          <span className="menu-footer">
            {isLoading && <p>Loading...</p>}
            {isLoggedIn
              ? <>
                  {navbar.person.map(list => (
                    <a key={list.key} href={list.link} title={list.title} className="action">
                      {list.name}
                    </a>
                  ))}
                  <a href="/login/">
                    {profile.displayName}
                  </a>
                </>
              : <a href="/login/">
                Log in to see my contact.
              </a>}
            <p className="action">{data.site.buildTime}</p>
          </span>
        </div>
      </header>
      <main className={`content-main${open === true ? " open-menu" : ""}`} id="content-main">
        {children}
        <PageUp />
      </main>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout