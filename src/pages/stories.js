import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"
import Footer from "../components/footer"

import "./stories.css"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const pageName = "Stories"
  const allName = "All " + pageName

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
      <div className="zoom-in">
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
        <section className="page-grid">
          {visibleWorks.length
            ? visibleWorks.map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <Card
                  key={frontmatter.slug}
                  Path={frontmatter.path}
                  Cover={frontmatter.cover}
                  Title={frontmatter.title}
                  Date={frontmatter.date} />
              )
            })
            : <p style={{ color: "var(--Text-2)", fontSize: "1.25rem" }}>
              No search
            </p>
          }
        </section>
        <Footer />
      </div>
    </Layout>
  )
}
// {childImageSharp{fluid(maxWidth:200,quality: 100){...GatsbyImageSharpFluid}}}
export const query = graphql`
  query BlogPage {
    allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {class: {eq: "stories"}}}) {
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