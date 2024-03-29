import React, { useState, useEffect } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Grid from "../components/grid.js"

import { Player } from '@lottiefiles/react-lottie-player'

const NotFound = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "24rem",
  minWidth: "16rem",
  padding: "4.5rem 1.75rem"
}

const NotFoundPage = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });

  return (

    <Layout>
      <Seo title="404: Not found" />
      <main className="zoom-out">
        <div className="home-space">
          <section className="login-box">
            <div className="lottie-space">
              <Player
                autoplay
                loop
                src="../../base/loop.json"
                style={{ height: '90vmin', width: '90vmin' }}
              >
              </Player>
            </div>
            <Grid GridType="mobile-type-t type-321" />
          </section>
          <section className="login-box login-r">
            <div style={NotFound}>
              <h1 className="big-vf big-motion">404</h1>
              <p>Not found page. You just hit a route that doesn&#39;t exist... the sadness.</p>
              <p style={{color: "var(--Text-2)"}}>{date.toString()}</p>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </Layout>
  )
}

export default NotFoundPage
