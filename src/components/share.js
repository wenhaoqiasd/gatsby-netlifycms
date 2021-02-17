import React from "react"
import PropTypes from "prop-types"

const Share = ({ Title, Path }) => (
  <>
    <style>
      {`
      .page-share {
        display: flex;
        justify-content: center;
        padding: 2rem 0 1rem;
      }
      .page-share a {
        font-family: "uuicon";
        display: inline-block;
        font-size: 1.5rem;
        margin: 0 1rem;
        text-decoration: none !important;
        color: var(--Text-2);
      }
      .page-share a:hover {
        color: var(--Text-1);
      }
    `}
    </style>
    <div className="page-share">
      <a
        href={
          "http://service.weibo.com/share/share.php?url=https://wenhaoqi.com" +
          Path +
          "&title=" +
          Title
        }
        target="_blank"
        rel="noopener noreferrer"
        title="Weibo"
      >
        
    </a>
      <a
        href={
          "https://twitter.com/share?text=Thoughts Covers&url=https://wenhaoqi.com" +
          Path
        }
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
      >
        
    </a>
      <a
        href={
          "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=https://wenhaoqi.com" +
          Path
        }
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        
    </a>
    </div>
  </>
)

Share.propTypes = {
  Title: PropTypes.string,
  Path: PropTypes.string,
}
Share.defaultProps = {
  Title: ``,
  Path: ``,
}

export default Share;
