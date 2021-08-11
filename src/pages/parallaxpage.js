import React, { useContext } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import PropTypes from "prop-types"

import ParallaxBox from '../components/parallaxbox'
import { MyContext } from '../context/mycontext'

import "./parallax.css"


const Section = ({ X, Y, TranslateX, TranslateY, DirectionX, DirectionY, Fade, DirectionF, children, className, Speed }) => {
  // 滚动数据给子元素
  const para = useContext(MyContext)
  // X
  const direction_x = DirectionX ? (X + para.value) * Speed : (100 - X - para.value) * Speed
  const numX = direction_x
  // Y
  const direction_y = DirectionY ? (Y + para.value) * Speed : (100 - Y - para.value) * Speed
  const numY = direction_y
  // 变换样式
  const styles = (TranslateX ? 'translateX(' + numX + 'vw)' : '') + (TranslateY ? 'translateY(' + numY + 'vh)' : '') + 'translateZ(1px)'
  // Fade
  const direction_f = (DirectionF ? (para.value / 100 - 1) : (2 - para.value / 100))
  const fade = (Fade ? direction_f : '')
  const cName = className
  return (
    <div style={{ top: 128, transform: styles, opacity: fade }} className={cName} >
      {children}
    </div>
  )
}

Section.propTypes = {
  X: PropTypes.number,
  Y: PropTypes.number,
  TranslateX: PropTypes.bool,
  TranslateY: PropTypes.bool,
  DirectionX: PropTypes.bool,
  DirectionY: PropTypes.bool,
  Fade: PropTypes.bool,
  children: PropTypes.node.isRequired,
  DirectionF: PropTypes.bool,
  className: PropTypes.string,
  Speed: PropTypes.number
}
Section.defaultProps = {
  X: 0,
  Y: 0,
  TranslateX: true,
  TranslateY: false,
  DirectionX: true,
  DirectionY: true,
  Fade: true,
  DirectionF: true,
  className: '',
  Speed: 1
}



const ParallaxPage = () => {

  return (
    <Layout>
      <Seo title="ParallaxPage" />
      <ParallaxBox>
        <Section
          X={-100}
          Y={-50}
          TranslateX={true}
          TranslateY={true}
          DirectionX={true}
          DirectionY={true}
          Fade={false}
          DirectionF={true}
          Speed={0.8}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
      <ParallaxBox className="Popo">
        <Section
          X={-100}
          Y={-50}
          TranslateX={true}
          TranslateY={true}
          DirectionX={true}
          DirectionY={true}
          Fade={false}
          DirectionF={true}
          Speed={0.8}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
      <ParallaxBox>
        <Section
          X={-100}
          Y={-50}
          TranslateX={true}
          TranslateY={true}
          DirectionX={true}
          DirectionY={true}
          Fade={false}
          DirectionF={true}
          Speed={0.8}
        >
          <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
            Card
          </div>
        </Section>
      </ParallaxBox>
    </Layout>
  )
}

export default ParallaxPage
