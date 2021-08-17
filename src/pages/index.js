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
import RellaxWrapper from "react-rellax-wrapper"
import { Player } from '@lottiefiles/react-lottie-player'

// 内容
import navbar from "../components/nav.json"

// 样式
import "./index.css"

const IndexPage = () => {

  const [fontLoaded, setFontLoaded] = useState(false)
  const pageName = "Home"

  useEffect(() => {

    const isBrowser = () => typeof window !== "undefined"

    async function loadFont() {
      if (!isBrowser()) return
      const fontUrl = `url(${window.location.href.split("#")[0]}fonts/WhirlyBirdieGX.ttf)`
      const font = new FontFace("WhirlyBirdieGX", fontUrl, { display: "block" });
      await font.load()
      document.fonts.add(font)
    }
    loadFont()

    loadFont().then(() => {
      setFontLoaded(true)
    })
  }, [])

  const cls = ['big-vf handle desktop', fontLoaded && 'font-style'].filter(Boolean).join(' ')

  return (
    <Layout>
      <Seo title={pageName} />
      <main className="zoom-out">
        <div className="home-space">
          <section className="home-01">
            {fontLoaded
              ? <Draggable handle=".handle">
                <h1 className={cls}>
                  <span><span className="desktop-symbol">{"→"}</span>DESIGN<span className="desktop-symbol">{","}</span></span>
                  <br />
                  <span>DEVELOP</span>
                  <br />
                  <span><span className="desktop-symbol">{"& "}</span>CREATE<span className="desktop-symbol">{"."}</span></span>
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
              I’m currently the product designer for&nbsp;
              <a href="https://www.aliyundrive.com" target="_blank" rel="noopener noreferrer" className="hover-img"><img src="/assets/a.svg" alt="" />aDrive</a>&nbsp;at Alibaba.
              I’ve and also work on building design system. Before that, I worked on&nbsp;
              <a href="https://thoughts.teambition.com/site" target="_blank" rel="noopener noreferrer" className="hover-img"><img src="/assets/t.svg" alt="" />Teambition Thoughts</a>,
              100offer, and AMILY. I love building tools that people depend on for their work.
            </h4>
            <a href="https://www.figma.com/community/plugin/986289377230504703/DarkSide" target="_blank" rel="noopener noreferrer" className="block-link hover-img"><img src="/assets/d.svg" alt="" /><h4>Figma plug-in DarkSide →</h4></a>
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