import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Card = ({ Title, Path, Cover, Date }) => (
  <div>
    <Link to={Path} className="card">
      <img src={Cover} alt={Title} />
      <h4>{Title}</h4>
      <p className="action" style={{ color: "var(--Text-2)", marginTop: "0.25rem" }}>{Date}</p>
      <div className="line"></div>
    </Link>
  </div>
)

Card.propTypes = {
  Title: PropTypes.string,
  Path: PropTypes.string,
  Cover: PropTypes.string,
  Date: PropTypes.string
}
Card.defaultProps = {
  Title: ``,
  Path: ``,
  Cover: ``,
  Date: ``
}

export default Card;
