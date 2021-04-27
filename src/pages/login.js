import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Grid from "../components/grid"

import { Player } from '@lottiefiles/react-lottie-player'
// Firebase
import { auth, useAuth, Form, FormState, firestore, useFirestoreQuery } from "gatsby-theme-firebase"

const Login = {
  padding: "4.5rem 1.75rem 4.5rem",
}

const LoginPage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth()

  const [list] = useFirestoreQuery(
    firestore.collection("list")
  )

  const myList = list.filter(n => profile?.uid === n.uid)

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
            
            {isLoggedIn
              ? <div style={Login}>
                {profile
                  && <h3>Hi! {profile.displayName}.</h3>
                }
                {profile.uid === "16lxmjRKQNePuVHdLBY3zmd5QPM2"
                  ? <p>This is <a href="/admin/">AdminScreen</a> of NetlifyCMS. And this is <a href="/about/">AboutScreen</a> and <a href="/imagebox/">ImageBox</a>.</p>
                  : <p>You can see my contact information now, Favorites feature is in development.</p>
                }
                {myList.length > 0
                  ? myList.map(card => (
                    <textarea rows="6" className="user-note" placeholder="Stickies" key={card.uid} value={card.text} onChange={(e) => {
                      const value = e.target.value
                      const dataRef = firestore.collection("list").doc(profile.uid);
                      dataRef.update({ text: value })
                    }} />
                  ))
                  : (
                    <button className="signout-btn" onClick={(e) => {
                      const dataRef = firestore.collection("list").doc(profile.uid);
                      dataRef.set({
                        text: "",
                        uid: profile.uid
                      })
                    }}>Add Stickies</button>
                  )
                }
                <button className="signout-btn" onClick={() => auth.signOut()}>
                  Sign Out
                </button>
              </div>
              : <FormState.Provider>
                <Form onLoginSuccess={() => { navigate("/login/"); }} onResetSuccess={() => { alert("Email sent!"); }} />
              </FormState.Provider>}
              {isLoading && <p>Loading..</p>}
          </section>
        </div>
        <Footer />
      </main>
    </Layout>
  )
}

export default LoginPage