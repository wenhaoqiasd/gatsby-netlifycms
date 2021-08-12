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

  Opacity,
  DirectionOpacity,
  children,
  className
}) => {
  // 滚动数据给子元素
  const para = useContext(MyContext)

  // X 范围
  const minmaxX = para.value > MinX ? (para.value < MaxX ? para.value : MaxX) : MinX
  // X 方向
  const numX = DirectionX ? (minmaxX - 100) * SpeedX + X : (100 - minmaxX) * SpeedX + X

  // Y 范围
  const minmaxY = para.value > MinY ? (para.value < MaxY ? para.value : MaxY) : MinY
  // Y 方向
  const numY = DirectionY ? (minmaxY - 100) * SpeedY + Y : (100 - minmaxY) * SpeedY + Y

  // Scale 范围
  const minmaxScale = para.value / 100 > MinScale / 100 ? (para.value / 100 < MaxScale / 100 ? para.value / 100 : MaxScale / 100) : MinScale / 100
  // Scale 方向
  const numScale = DirectionScale ? (minmaxScale - 1) * (SpeedScale / 100) + 1 : (1 - minmaxScale) * (SpeedScale / 100) + 1

  // 变换样式
  const styles = `matrix(${Scale ? numScale : 1},0,0,${Scale ? numScale : 1},${TranslateX ? numX : 0},${TranslateY ? numY : 0})`

  // Opacity
  // const direction_f = (DirectionOpacity ? (para.value / 100 - 1) : (2 - para.value / 100))
  // const opacity = (Opacity ? direction_f : 1)
  // 延迟小于 1
  // const opacityin = para.value / 100 - 50 / 100
  // const opacityin = 1 - para.value / 100
  
  const opacityin = Math.abs(Math.abs((para.value - 50) * 2) - 100) / 100
  // console.log(opacityin)
  const opacity = opacityin > 0 ? (opacityin < 1 ? opacityin : 1) : 0

  const cName = className

  return (
    <div style={{ transform: styles, opacity: opacity, transformOrigin: Origin, display: 'inline-block' }} className={cName} >
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

  // Opacity
  Opacity: PropTypes.bool,
  children: PropTypes.node.isRequired,
  DirectionOpacity: PropTypes.bool,
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

  Opacity: false,
  DirectionOpacity: false,
  className: '',
}

export default Section