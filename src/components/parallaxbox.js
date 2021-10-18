// import React, { useRef, useState, useEffect } from 'react'
// import { MyContext } from '../context/mycontext'

// const ParallaxStyle = {
//   position: "relative",
//   width: "100%",
//   minHeight: "100vh",
//   overflow: "hidden"
// }

// const ParallaxBox = (props) => {

//   const First = useRef(0)

//   const [parallax, setParallax] = useState(100)
//   const scrollHandler = () => {
//     // 可视高
//     const clientH = window.innerHeight || document.documentElement.clientHeight
//     // 容器距离顶部距离
//     const scrollTop = First.current.getBoundingClientRect().top
//     // 容器高度
//     const scrollH = First.current.getBoundingClientRect().height
//     // 元素滚动百分比
//     const top100 = 100 - (scrollTop / clientH * 100)
//     // 元素高度百分比
//     const height100 = (scrollH / clientH * 100)
//     // 出画停止计算
//     top100 < (height100 + 100) ? setParallax(top100) : setParallax(height100 + 100)
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", scrollHandler, true)
//     return () => {
//       window.removeEventListener("scroll", scrollHandler, true)
//     }
//   }, [])

//   return (
//     <div ref={First} style={ParallaxStyle} className={props.className}>
//       <MyContext.Provider value={{ value: parallax }}>
//         {props.children}
//       </MyContext.Provider>
//     </div>
//   )
// }

// export default ParallaxBox