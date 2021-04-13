import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Grid from "../components/grid.js"

const NotFound = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <main className="zoom-out">
      <div className="home-space">
        <section style={NotFound}>
          <h1 className="big-type">404</h1>
          <p>Not found page.</p>
          <Grid GridType="mobile-type-t type-321" />
        </section>
        <section style={NotFound}>
          <h1 className="big-type big-stroke">Oops!</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Grid GridType="mobile-type-t type-321" />
        </section>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
