import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Grid from "../components/grid.js"
import { Player } from '@lottiefiles/react-lottie-player'
// Firebase
import { auth, useAuth, Form, FormState } from "gatsby-theme-firebase"

// import Grid from "../components/grid.js"

// const NotFound = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
// }

const LoginPage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth()
  return (
    <Layout>
      <Seo title="Login" />
      <main className="zoom-out">
        <div className="home-space">
          <section className="login-box">
            <div className="lottie-space">
              <Player
                autoplay
                loop
                src="../../base/loop.json"
                style={{ height: '90vmin', width: '90vmin' }}
              >
              </Player>
            </div>
            <Grid GridType="mobile-type-t type-321" />
          </section>
          <section className="login-box login-style">
            {isLoading && <p>Loading..</p>}
            {isLoggedIn
              ? <div>
                {profile
                  && <h3>Hi! {profile.displayName}.</h3>
                }
                <p>You can check my contact information now, More features are in the works...</p>
                <button className="signout-btn" onClick={() => auth.signOut()}>
                  Sign Out
                </button>
              </div>
              : <FormState.Provider>
                <Form onLoginSuccess={() => { navigate("/login/"); }} onResetSuccess={() => { alert("Email sent!"); }} />
              </FormState.Provider>}
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default LoginPage