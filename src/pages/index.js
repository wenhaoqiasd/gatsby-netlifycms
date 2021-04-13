import React from "react"

// 组件
import Image from "../components/image"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Social from "../components/social"
import Grid from "../components/grid.js"
import Banner from "../components/banner"
import Loop from "../components/loop"

// 插件
import Draggable from "react-draggable"
import { RandomReveal } from "react-random-reveal"
import RellaxWrapper from "react-rellax-wrapper"
import { Player } from '@lottiefiles/react-lottie-player'

// 内容
import navbar from "../components/nav.json"

// 样式
import "./index.css"

const IndexPage = () => {

  const pageName = "Home"
  const myTitle = navbar.myTitle
  const myDescription = navbar.myDescription

  return (
    <Layout>
      <Seo title={pageName} />
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
            <Grid GridType="type-321" />
          </section>

          <section className="home-02">
            <Banner />
          </section>

          <section className="home-03">
            <RellaxWrapper speed={-4} percentage={0.5}>
              <Image />
            </RellaxWrapper>
            <div className="ring">
              <RellaxWrapper speed={-6} percentage={0.4}>
                <Loop footerLink="none" />
              </RellaxWrapper>
            </div>
          </section>

          <section className="home-04">
            <h2>{myTitle}</h2>
            <h4>{myDescription}</h4>
            <Grid GridType="mobile-type-t type-321" />
          </section>
        </div>

        <div className="home-space">
          <section className="home-05">
            {navbar.homePage.map(list => (
              <div key={list.grid} className="column" style={{ gridArea: list.grid }}>
                <h1>{list.name}</h1>
                <p>{list.description}</p>
              </div>
            ))}
            <Grid GridType="mobile-type-t" />

            <div className="lottie-space">
              <RellaxWrapper speed={-6} percentage={0.4}>
                <Player
                  autoplay
                  loop
                  src="../../base/loop.json"
                  style={{ height: '680px', width: '680px' }}
                >
                </Player>
              </RellaxWrapper>
            </div>

          </section>

          <section className="home-06">
            <Loop />
            <Grid GridType="mobile-type-t type-1221" />
          </section>
        </div>

      </main>
      <Social />
    </Layout>
  )
}

export default IndexPage