import React from "react"

// 组件
import SEO from "../components/seo"
import Layout from "../components/layout"
import Social from "../components/social"
// import Image from "../components/image"
import Grid from "../components/grid.js"
import Banner from "../components/banner"

// 插件
import Draggable from "react-draggable"
import { RandomReveal } from "react-random-reveal"

import "./index.css"

const IndexPage = () => {

  const pageName = "Home"

  return (
    <Layout>
      <SEO title={pageName} />
      <main className="zoom-out">
        <div className="home-space">

          <section className="home-01">
            <Draggable handle=".handle">
              <h1 className="big-type handle">
                <RandomReveal
                  isPlaying
                  duration={2}
                  revealDuration={2}
                  characters="DESIGN"
                  characterSet="DEVELOPCREATE"
                  onComplete={() => [true, 12000]}
                />
                {","}
                <br />
                <span className="big-stroke">
                  DEVELOP
                  <br />{"&"} CREATE.
                </span>
              </h1>
            </Draggable>
            <Grid GridType="type-a" />
          </section>

          <section className="home-02">
            <Banner />
            <Grid />
          </section>

          <section className="home-03">

          </section>

          <section className="home-04">
            <h2>Say hi!</h2>
            <h4>
              I'm Curiosity Wen, I'm a Product designer at Alibaba on
              the A-Drive team. Used to work in ecommerce, recruitment
              industry, engaged in digital product design. I also work in other
              fields such as Motion Graphic, Illustration_
            </h4>
            <Grid GridType="type-a" />
          </section>
        </div>
      </main>
      <Social />
    </Layout>
  )
}

export default IndexPage

// {/* <h1>Hi people</h1>
// <p>Welcome to your new Gatsby site.</p>
// <p>Now go build something great.</p>
// <div style={{ marginBottom: `1.45rem` }}>
//   <Image />
// </div> */}