import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Grid from "../components/grid.js"

import { Player } from '@lottiefiles/react-lottie-player'
// Firebase
import { auth, useAuth, Form, FormState } from "gatsby-theme-firebase"

const Login = {
  padding: "4.5rem 1.75rem 4.5rem",
}

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
          <section className="login-box login-style login-r">
            {isLoading && <p>Loading..</p>}
            {isLoggedIn
              ? <div style={Login}>
                {profile
                  && <h3>Hi! {profile.displayName}.</h3>
                }
                {profile.uid === "16lxmjRKQNePuVHdLBY3zmd5QPM2"
                  ? <p>This is <a href="/admin/">AdminScreen</a> of NetlifyCMS. And this is <a href="/about/">AboutScreen</a> and <a href="/imagebox/">ImageBox</a>.</p>
                  : <p>You can see my contact information now, More features are in the works...</p>
                }
                <button className="signout-btn" onClick={() => auth.signOut()}>
                  Sign Out
                </button>
              </div>
              : <FormState.Provider>
                <Form onLoginSuccess={() => { navigate("/login/"); }} onResetSuccess={() => { alert("Email sent!"); }} />
              </FormState.Provider>}
          </section>
        </div>
        <Footer />
      </main>
    </Layout>
  )
}

export default LoginPage