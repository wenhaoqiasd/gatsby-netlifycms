import React from "react"
import PropTypes from "prop-types"

import "./grid.css"

const Grid = ({ GridType }) => {

  return (
    <div className={GridType + " grid-box"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

Grid.propTypes = {
  GridType: PropTypes.string,
}
Grid.defaultProps = {
  GridType: ``,
}

export default Grid