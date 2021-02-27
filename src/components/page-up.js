import React, { useState, useEffect, useCallback } from "react"

const PageUp = () => {
  const [progress, setProgress] = useState(1000)
  const handleScroll = useCallback(() => {
    // 页面总高
    var totalH =
      document.body.scrollHeight || document.documentElement.scrollHeight
    // 可视高
    var clientH = window.innerHeight || document.documentElement.clientHeight
    // 计算有效高
    var validH = totalH - clientH
    // 滚动条卷去高度
    var scrollH =
      document.body.scrollTop || document.documentElement.scrollTop
    // 百分比
    var result = (1000 - ((scrollH / validH) * 100 * 0.75)).toFixed(0)
    setProgress(result)
    // console.log(result);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [
    handleScroll
  ])
  return (
    <>
      <style>
        {`
          /* PageUp */
          .page-up {
            position: fixed;
            right: 1.5rem;
            bottom: 1.5rem;
            width: 2rem;
            height: 2rem;
            z-index: 40;
            transition: var(--ease-3);
            transform: rotateZ(-90deg) scale(0.5);
            pointer-events: none;
          }
          .up-scroll .page-up {
            pointer-events: auto;
            transform: rotateZ(-90deg) scale(1);
          }
          .page-up svg :first-child {
            transition: var(--ease-3);
            stroke: var(--Text-1);
            stroke-width: 8;
          }
          .up-scroll .page-up svg :first-child {
            stroke: var(--Text-3);
            stroke-width: 2;
          }
          .page-up svg :nth-child(2) {
            stroke: var(--Text-1);
          }
          @media screen and (max-width: 48rem) {
            .page-up svg :first-child {
              stroke: transparent;
            }
          }
        `}
      </style>
      <a href="#up" className="page-up">
        <svg width="32px" height="32px">
          <circle r="12" cy="16" cx="16" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          <circle r="12" cy="16" cx="16" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeDashoffset={progress} strokeDasharray="1000" />
        </svg>
      </a>
    </>
  )
}
export default PageUp