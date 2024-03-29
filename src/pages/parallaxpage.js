import React, { useContext } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import { ParallaxBox, Section } from '../components/parallaxItem'
import { MyContext } from '../context/mycontext'
// import Section from '../components/parallaxItem'

import "./parallax.css"

const ParallaxPage = () => {

  const num = useContext(MyContext)

  return (
    <Layout>
      <Seo title="ParallaxPage" />
      <ParallaxBox className="textbox">
        <>{num}</>
        <Section
          TranslateX={true}
          TranslateY={false}
          DirectionX={true}
          DirectionY={false}
          Scale={true}
          DirectionScale={false}
          SpeedX={10}
          SpeedScale={100}
          MaxScale={100}
          MinScale={70}
          Opacity={true}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
        <Section
          TranslateX={false}
          TranslateY={false}
          DirectionX={true}
          DirectionY={false}
          Scale={true}
          DirectionScale={true}
          SpeedScale={100}
          MinScale={100}
          Opacity={true}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
      <ParallaxBox className="textbox Popo">
        <Section
          TranslateX={false}
          TranslateY={false}
          DirectionX={true}
          DirectionY={false}
          Scale={true}
          DirectionScale={true}
          SpeedScale={100}
          MinScale={100}
          Opacity={true}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
      <ParallaxBox>
        <h1>结束{num}</h1>
      </ParallaxBox>
    </Layout>
  )
}

export default ParallaxPage