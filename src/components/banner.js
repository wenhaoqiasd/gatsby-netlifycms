import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// 插件
import cx from "classnames"
import Tilt from 'react-parallax-tilt'

import "./banner.css"

const pickExcept = (array, prev) => {
  const candidates = prev
    ? array.filter((item) => item.recordId !== prev.recordId)
    : array
  return candidates[Math.floor(Math.random() * candidates.length)]
}

function useBanners() {
  const { sandwiches } = useStaticQuery(graphql`
    query MenuQuery {
      sandwiches: allAirtable(
        filter: { table: { eq: "Sandwiches" } }
        sort: { fields: data___Description, order: ASC }
      ) {
        nodes {
          data {
            Description
            BannerLink
            Color
            Cover {
              url
            }
          }
          recordId
        }
      }
    }
  `)

  return sandwiches.nodes || []
}

function usePickBanner(sandwiches) {
  const [result, setResult] = useState(() => pickExcept(sandwiches))

  useEffect(() => {
    const interval = setInterval(
      () => setResult((prev) => pickExcept(sandwiches, prev)),
      4000
    )
    return () => clearInterval(interval)
  }, [sandwiches])

  return result
}

const Banner = () => {
  const [isClient, setIsClient] = useState(false)
  const sandwiches = useBanners()
  const currentSandwich = usePickBanner(sandwiches)

  useEffect(() => setIsClient(true), [])

  return (
    <div>
      {sandwiches.map((item) => (
        <a
          key={item.recordId}
          className={cx("banner-space", {
            visible: isClient && item.recordId === currentSandwich.recordId,
          })}
          style={{ backgroundColor: item.data.Color }}
          href={item.data.BannerLink}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Tilt
              className="Tilt"
              tiltReverse={true}
              perspective={1800}
              scale={1.08}
              transitionSpeed={2000}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
            <img
              src={item.data.Cover[0].url}
              alt={item.data.Description}
              className="Tilt-img"
            />
          </Tilt>

          <div className="banner-ring">
            <p>{item.data.Description}</p>
            <div className="banner-time-ring"></div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Banner