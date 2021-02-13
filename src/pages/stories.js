import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
// import Placeholder from "../components/placeholder"

import "./stories.css"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const pageName = "Stories"
  const allName = "All " + pageName

  // 样式切换
  // const [open, setOpen] = useState(false)
  // 搜索
  const [query, setQuery] = useState('')

  const [currentTag, setCurrentTag] = useState(allName);
  const allTags = [allName];
  edges
    .map((n) => n.node.frontmatter.tags)
    .forEach((tags) => {
      for (const tag of tags) {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      }
    });

  // console.log(allTags, currentTag);
  // console.log('query', query)

  let visibleWorks =
    currentTag !== allName
      ? edges.filter((n) => n.node.frontmatter.tags.includes(currentTag))
      : edges;

  if (query) {
    visibleWorks = visibleWorks.filter((n) => n.node.frontmatter.title.indexOf(query) >= 0)
  }

  function handleQueryChange(e) {
    setQuery(e.target.value)
  }

  return (
    <Layout>
      <SEO title={pageName} />

      {/* 工具条 */}

      {/* <button
        aria-expanded={open === true ? "true" : "false"}
        className={`list-grid-btn${open === true ? " list" : ""}`}
        onClick={() => setOpen(!open)}>
      </button>
      <div className="page-search">
        <span className="page-search-icon"></span>
      </div> */}

      {/* tab 部分 */}
      <div className="space-sticky">
        <div className="page-search">
          <span></span>
          <input type="text" name="firstname" placeholder="Search" value={query} onChange={handleQueryChange} />
        </div>
        <div className="tgas-tab">
          {allTags.map((n) => (
            <div key={n} className="tab">
              <div className={n === currentTag ? "active" : ""}
                onClick={() => {
                  setCurrentTag(n);
                }}
                role="button"
                onKeyPress={() => { }}
                tabIndex="0"><h1 className="big-stroke">{n}</h1></div>
            </div>
          ))}
        </div>
      </div>

      {/* 内容卡片部分 */}

      {/* <section className={`page-grid${open ? " page-list" : ""}`}> */}
      <section className="page-grid">
        {visibleWorks.length
          ? visibleWorks.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path} className="card">
                  <img src={frontmatter.cover} alt={frontmatter.title} />
                  <h4>{frontmatter.title}</h4>
                  <p className="action" style={{ color: "var(--Text-2)", marginTop: "0.25rem" }}>{frontmatter.date}</p>
                  <div className="line"></div>
                </Link>
              </div>
            );
          })
          : <p>占位文字</p>
        }
      </section>

      {/* 需要页尾 ！！！ */}

    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {class: {eq: "stories"}}}) {
      edges {
        node {
          frontmatter {
            path
            class
            slug
            title
            cover
            date(formatString: "MMMM DD, YYYY")
            tags
            color
          }
        }
      }
    }
  }
`;
export default IndexPage