import React from "react"
import navbar from "./nav.json"

const Social = () => (
  <>
    <style>
      {`.social-icon {
          z-index: 60;
          position: fixed;
          bottom: 0;
          left: 0rem;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 1rem;
          transition: var(--ease-3);
        }
        .social-icon a {
          margin-top: 0;
          font-family: "uuicon";
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          display: inline-block;
          font-size: 1.5rem;
          transition: var(--ease-3);
        }
        @media screen and (max-width: 48rem) {
          .social-icon {
            column-gap: 1.5rem;
          }
          .social-icon a:nth-child(1){
            transition: var(--ease-3);
          }
          .social-icon a:nth-child(2){
            transition: var(--ease-3) 0.15s;
          }
          .social-icon a:nth-child(3){
            transition: var(--ease-3) 0.3s;
          }
          .social-icon a {
            color: transparent;
            pointer-events: none; 
            transform: scale(0.5);
          }
          .up-scroll .social-icon a{
            color: inherit;
            pointer-events: auto; 
            transform: scale(1);
          }
        }
      `}
    </style>
    <div className="social-icon">
      {navbar.social.map(list => (
        <a
          key={list.key}
          href={list.link}
          title={list.title}
          rel="noopener noreferrer"
          target="_blank">
          {list.icon}
        </a>
      ))}
    </div>
  </>
)

export default Social;
