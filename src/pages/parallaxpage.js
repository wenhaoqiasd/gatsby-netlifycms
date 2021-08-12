import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import ParallaxBox from '../components/parallaxbox'
import Section from '../components/parallaxItem'
// import { MyContext } from '../context/mycontext'

import "./parallax.css"

const ParallaxPage = () => {

  return (
    <Layout>
      <Seo title="ParallaxPage" />
      <ParallaxBox className="textbox">
        <Section
          TranslateX={true}
          TranslateY={false}
          DirectionX={true}
          DirectionY={false}
          Scale={true}
          DirectionScale={false}
          SpeedX={10}
          SpeedScale={100}
          MaxScale={130}
          MinScale={70}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
      <ParallaxBox className="textbox Popo">
        <Section
          TranslateX={true}
          TranslateY={false}
          DirectionX={true}
          DirectionY={false}
          Scale={true}
          DirectionScale={true}
          SpeedScale={100}
          MinScale={70}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
      <ParallaxBox>

        <h1>行吧</h1>
      </ParallaxBox>
    </Layout>
  )
}

export default ParallaxPage