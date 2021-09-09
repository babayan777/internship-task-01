import React from 'react'
import "./Home.scss"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Home() {
    return (
        <div className="home-container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home
