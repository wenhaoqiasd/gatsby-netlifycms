import React from "react"
import { navigate, Link } from "gatsby"
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
  const { isLoggedIn, profile } = useAuth()

  const [list, isLoading] = useFirestoreQuery(
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
                  ? <p>This is <a href="/admin/">AdminScreen</a> of NetlifyCMS. And this is <a href="/imagebox/">ImageBox</a>.</p>
                  : <p>Now you can add my articles to your favorites.</p>
                }
                {isLoading && <p>Loading....</p>}
                {myList.length > 0
                  ? myList.map(card => (
                    <span key={card.uid}>
                      <textarea rows="1" className="user-note" placeholder="Favorites" value={card.text} onChange={(e) => {
                        const value = e.target.value
                        const dataRef = firestore.collection("list").doc(profile.uid);
                        dataRef.update({ text: value })
                      }} />
                      {card ? card.fav.map(fav => (
                        <Link className="fav-cell" key={fav.name} to={fav.link}>
                          <img src={fav.cover} alt={fav.name} />
                          <span>
                            <p style={{ color: "var(--Text-1)", fontWeight: "600", fontSize: "14px" }}>{fav.name}</p>
                            <p style={{ color: "var(--Text-2)", fontSize: "12px" }}>{fav.date}</p>
                          </span>
                        </Link>
                      )) : null}
                    </span>
                  ))
                  : (
                    <button className="signout-btn" onClick={(e) => {
                      const dataRef = firestore.collection("list").doc(profile.uid);
                      dataRef.set({
                        fav: [],
                        text: "Favorites",
                        uid: profile.uid
                      }, { merge: true })
                    }}>Create Favorites</button>
                  )
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