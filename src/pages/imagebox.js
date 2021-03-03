import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import Clipboard from 'react-clipboard.js'

const boxStyles = {
  position: "relative",
  padding: "0 0 4rem",
}

const imageBoxStyle = {
  width: "100%",
  overflow: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  padding: "2rem 1.75rem 0",
  boxShadow: "0 1px 0 var(--Text-3)",
}

const coverStyle = {
  width: "20rem",
  maxWidth: "64vw",
  marginRight: "1.75rem",
  boxShadow: "0 0.5rem 1rem 0 rgba(0, 0, 0, 0.08)",
}

const copylinkStyle = {
  outline: "none",
  border: "0",
  cursor: "pointer",
  margin: "0 -2rem 0 0",
  boxShadow: "0 0 0 1px var(--Border)",
  background: "transparent",
}

const docimageStyle = {
  width: "15rem",
  display: "block",
  flex: "0 0 auto",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}

const textStyle = {
  padding: "0 1.75rem",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}

const textTitle = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontWeight: "600",
}

const ImageBox = () => {

  function copyLinkAlert() {
    alert("Done.");
  }

  const data = useStaticQuery(graphql`
    query ImageQuery {
      resources: allAirtable(sort: { order: DESC, fields: [data___Date] }, filter: {table: {eq: "Resources"}}) {
        nodes {
          data {
            Blog
            Document {
              url
            }
            Link
            Cover {
              url
            }
            Date
          }
          recordId
        }
      }
    }  
  `);
  return (
    <Layout>
      <SEO title="ImageBox" />
      <main className="zoom-out" style={{ padding: "4.5rem 0 0" }}>
        {data.resources.nodes.map((item) => (
          <div key={item.recordId} style={boxStyles}>
            <div style={imageBoxStyle}>
              <img style={coverStyle} src={item.data.Cover[0].url} alt={item.data.Blog} />
              {item.data.Document.map((doc) => (
                <Clipboard onClick={copyLinkAlert} style={copylinkStyle} data-clipboard-text={doc.url} key={doc.url}>
                  <img style={docimageStyle} src={doc.url} alt={doc.url} />
                </Clipboard>
              ))}
            </div>
            <div style={textStyle}>
              <h4 style={textTitle}>{item.data.Blog}</h4>
              <Link className="action" to={item.data.Link}>wenhaoqi.com{item.data.Link}</Link>
            </div>
          </div>
        ))}
        <Footer />
      </main>
    </Layout>
  )
}
export default ImageBox
