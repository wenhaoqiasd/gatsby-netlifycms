import React, { useEffect, useState } from "react"

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

const isBrowser = () => typeof window !== "undefined"

async function loadFont() {
  if (!isBrowser()) return
  const fontUrl = `url(${window.location.href.split("#")[0]}fonts/WidescreenVF-WghtWdthMixd.ttf)`
  const font = new FontFace("WidescreenVF", fontUrl);
  await font.load()
  document.fonts.add(font)
  // document.body.classList.add('fonts-loaded')
}
loadFont()

const IndexPage = () => {

  const [fontLoaded, setFontLoaded] = useState(false)
  const pageName = "Home"

  useEffect(() => {
    loadFont().then(() => {
      setFontLoaded(true)
    })
  }, [])

  const cls = ['big-vf big-box handle desktop', fontLoaded && 'font-style'].filter(Boolean).join(' ')

  return (
    <Layout>
      <Seo title={pageName} />
      <main className="zoom-out">
        <div className="home-space">
          <section className="home-01">
            {fontLoaded
              ? <Draggable handle=".handle">
                <h1 className={cls}>
                  <span className="big-motion-1">
                    <RandomReveal
                      isPlaying
                      duration={4}
                      revealDuration={4}
                      characters="DESIGN"
                      characterSet="DEVELOPCREATE"
                      onComplete={() => [false, 12000]}
                    />
                  </span>
                  <span className="desktop-symbol">{","}</span>
                  <br />
                  <span className="big-motion-2">DEVELOP</span>
                  <br />
                  <span className="desktop-symbol">{"& "}</span>
                  <span className="big-motion-3">CREATE</span>
                  <span className="desktop-symbol">{"."}</span>
                </h1>
              </Draggable>
              : null
            }
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
            <h4>My name is Curiosity Wen, I’m Chinese he/him living in Shanghai, China. Design is the medium through which I express myself.</h4>
            <h4>
              I’m currently the product designer for <span className="hover-img"><img src="/assets/a.svg" alt="" />aDrive</span> at Alibaba.&nbsp;
              I’ve and also work on building design system. Before that, I worked on Teambition Thoughts, 100offer,&nbsp;
              and AMILY. I love building tools that people depend on for their work.
            </h4>
            <a href="https://www.figma.com/community/plugin/986289377230504703/DarkSide" target="_blank" rel="noopener noreferrer" className="block-link"><h4>Figma plug-in DarkSide →</h4></a>
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
              <RellaxWrapper speed={-6} percentage={0.1}>
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