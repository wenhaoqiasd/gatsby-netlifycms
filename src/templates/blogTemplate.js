import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share"

import "./blogTemplate.css"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="zoom-in">
        <div className="page">
          <h1 className="page-title">{frontmatter.title}</h1>
          <p className="page-date">{frontmatter.date}</p>
          <div className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Share Path={frontmatter.path} Title={frontmatter.title}/>
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
      }
    }
  }
`;
