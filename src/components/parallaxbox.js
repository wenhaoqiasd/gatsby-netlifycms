import React, { useRef, useState, useEffect } from 'react'
import {MyContext} from '../context/mycontext'

const ParallaxBox = (props) => {

  const First = useRef(0)

  const [parallax, setParallax] = useState(100)
  const scrollHandler = () => {
    const clientH = window.innerHeight || document.documentElement.clientHeight
    const scrollTop = First.current.getBoundingClientRect().top
    const top100 = 100 - (scrollTop / clientH * 100)
    setParallax(top100)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  return (
    <div ref={First}>
      <MyContext.Provider value={{value: parallax}}>
        {props.children}
      </MyContext.Provider>
    </div>
  )
}

export default ParallaxBox