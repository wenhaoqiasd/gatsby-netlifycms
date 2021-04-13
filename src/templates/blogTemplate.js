import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Footer from "../components/footer"

import "./blogTemplate.css"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="zoom-in">
        <div className="page-head" style={{ backgroundColor: frontmatter.color }}>
          {frontmatter.class !== "others" ?
            <>
              <img src={frontmatter.cover} alt={frontmatter.title} />
              <h1 className="page-title">{frontmatter.title}</h1>
              <p className="page-date">{frontmatter.date}</p>
              <Share Path={frontmatter.path} Title={frontmatter.title} />
            </>
            : null }
        </div>
        <div className="page">
          <div className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        class
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        cover
        color
      }
    }
  }
`;
