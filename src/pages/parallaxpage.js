import React, {useContext} from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import ParallaxBox from '../components/parallaxbox'
import {MyContext} from '../context/mycontext'

import "./parallax.css"

const Section1 = () => {
  const para = useContext(MyContext)
  return (
    <div className="parallaxbox">
      <h1 style={{transform: 'translateX(' + (para.value > 100 ? para.value - 100 : 0) + 'px)'}}>First {para.value.toFixed(2)}%</h1>
    </div>
  )
}

const Section2 = () => {
  const para = useContext(MyContext)
  return (
    <div className="parallaxbox">
      <h1 style={{transform: 'translateX(' + (para.value > 100 ? para.value - 100 : 0) + 'px)'}}>Second {para.value.toFixed(2)}%</h1>
    </div>
  )
}

const Section3 = () => {
  const para = useContext(MyContext)
  return (
    <div className="parallaxbox">
      <h1 style={{transform: 'translateX(' + (para.value > 100 ? para.value - 100 : 0) + 'px)'}}>Third {para.value.toFixed(2)}%</h1>
    </div>
  )
}


const ParallaxPage = () => {

  return (
    <Layout>
      <Seo title="ParallaxPage" />
      <ParallaxBox>
        <Section1 />
      </ParallaxBox>
      <ParallaxBox>
        <Section2 />
      </ParallaxBox>
      <ParallaxBox>
        <Section3 />
      </ParallaxBox>
    </Layout>
  )
}

export default ParallaxPage
