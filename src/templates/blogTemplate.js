import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Footer from "../components/footer"

// Firebase
import { useAuth, firestore, firebase, useFirestoreQuery } from "gatsby-theme-firebase"

import "./blogTemplate.css"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const { isLoading, isLoggedIn, profile } = useAuth()

  const [list] = useFirestoreQuery(
    firestore.collection("list")
  )
  const myList = list.filter(n => profile?.uid === n.uid)


  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="zoom-in">
        <div className="page-head" style={{backgroundImage: "linear-gradient(180deg, " + frontmatter.color + " 0%, var(--BG-P) 100%)"}}>
          {frontmatter.class !== "others" ?
            <>
              <img src={frontmatter.cover} alt={frontmatter.title} />
              <h1 className="page-title">{frontmatter.title}</h1>
              <p className="page-date">{frontmatter.date}</p>

              {isLoading && <p>Loading...</p>}
              {isLoggedIn
                ? <>
                  {myList.length > 0
                    ? <div className={`favorite${myList ? myList.map(card => (
                      card ? card.fav.map(fav => (
                        fav.name === frontmatter.title ? " fav-active" : null
                      )) : null
                    ).join('')) : null}`
                    }>
                      <div>
                        <button onClick={(e) => {
                          const dataRef = firestore.collection("list").doc(profile.uid)
                          dataRef.update({
                            fav: firebase.firestore.FieldValue.arrayUnion({
                              "name": frontmatter.title,
                              "link": frontmatter.path,
                              "cover": frontmatter.cover,
                              "date": new Date().toLocaleString()
                            })
                          })
                        }}>+ Add to favorites</button>

                        {myList ? myList.map(card => (
                          card ? card.fav.map(fav => (
                            fav.name === frontmatter.title
                              ? <button onClick={(e) => {
                                const dataRef = firestore.collection("list").doc(profile.uid)
                                dataRef.update({
                                  fav: firebase.firestore.FieldValue.arrayRemove({
                                    "name": frontmatter.title,
                                    "link": frontmatter.path,
                                    "cover": frontmatter.cover,
                                    "date": fav.date
                                  })
                                })
                              }} title={fav.date}>Remove to favorites</button>
                              : null
                          )) : null
                        )) : null}

                      </div>
                    </div>
                    : null
                  }
                </>
                :
                null
              }

              <Share Path={frontmatter.path} Title={frontmatter.title} />
            </>
            : <>
              <h1 className="page-title">{frontmatter.title}</h1>
            </>
          }
        </div>
        <div className="blog-shadow" />
        <div className="page">
          <div className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Footer />
      </div>
    </Layout >
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