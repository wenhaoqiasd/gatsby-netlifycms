import React, { useContext } from 'react'
import { MyContext } from '../context/mycontext'
import PropTypes from "prop-types"

const Section = ({
  TranslateX,
  X,
  DirectionX,
  SpeedX,
  MaxX,
  MinX,

  TranslateY,
  Y,
  DirectionY,
  SpeedY,
  MaxY,
  MinY,

  Scale,
  Origin,
  DirectionScale,
  SpeedScale,
  MaxScale,
  MinScale,

  Fade,
  DirectionFade,
  children,
  className
}) => {
  // 滚动数据给子元素
  const para = useContext(MyContext)

  // X 范围
  const minmaxX = para.value > MinX ? (para.value < MaxX ? para.value : MaxX) : MinX
  // X 方向
  const numX = DirectionX ? (minmaxX - 100) * SpeedX + X : (- minmaxX + 100) * SpeedX + X

  // Y 范围
  const minmaxY = para.value > MinY ? (para.value < MaxY ? para.value : MaxY) : MinY
  // Y 方向
  const numY = DirectionY ? (minmaxY - 100) * SpeedY + Y : (- minmaxY + 100) * SpeedY + Y

  // Scale 范围
  const minmaxScale = para.value / 100 > MinScale / 100 ? (para.value / 100 < MaxScale / 100 ? para.value / 100 : MaxScale / 100) : MinScale / 100
  // Scale 方向
  const numScale = DirectionScale ? (minmaxScale - 1) * (SpeedScale / 100) + 1 : (- minmaxScale + 1) * (SpeedScale / 100) + 1

  // 变换样式
  const styles = `matrix(${Scale ? numScale : 1},0,0,${Scale ? numScale : 1},${TranslateX ? numX : 0},${TranslateY ? numY : 0})`

  // Fade
  const direction_f = (DirectionFade ? (para.value / 100 - 1) : (2 - para.value / 100))
  const fade = (Fade ? direction_f : '')
  const cName = className

  return (
    <div style={{ transform: styles, opacity: fade, transformOrigin: Origin, display: 'inline-block' }} className={cName} >
      {children}
    </div>
  )
}

Section.propTypes = {
  // X轴视差
  TranslateX: PropTypes.bool,
  // X修正值
  X: PropTypes.number,
  // X轴方向
  DirectionX: PropTypes.bool,
  // X轴速度
  SpeedX: PropTypes.number,
  // 最大最小值
  MaxX: PropTypes.number,
  MinX: PropTypes.number,

  // Y轴视差
  TranslateY: PropTypes.bool,
  // Y修正值
  Y: PropTypes.number,
  // Y轴方向
  DirectionY: PropTypes.bool,
  // Y轴速度
  SpeedY: PropTypes.number,
  // 最大最小值
  MaxY: PropTypes.number,
  MinY: PropTypes.number,

  // 变换缩放
  Scale: PropTypes.bool,
  Origin: PropTypes.string,
  DirectionScale: PropTypes.bool,
  SpeedScale: PropTypes.number,
  MaxScale: PropTypes.number,
  MinScale: PropTypes.number,

  // Fade
  Fade: PropTypes.bool,
  children: PropTypes.node.isRequired,
  DirectionFade: PropTypes.bool,
  className: PropTypes.string,
}
Section.defaultProps = {

  TranslateX: true,
  X: 0,
  DirectionX: true,
  SpeedX: 20,
  MaxX: Infinity,
  MinX: -Infinity,

  TranslateY: false,
  Y: 0,
  DirectionY: true,
  SpeedY: 20,
  MaxY: Infinity,
  MinY: -Infinity,

  Scale: false,
  Origin: '50% 50%',
  DirectionScale: true,
  SpeedScale: 100,
  MaxScale: Infinity,
  MinScale: -Infinity,

  Fade: false,
  DirectionFade: false,
  className: '',
}

export default Section