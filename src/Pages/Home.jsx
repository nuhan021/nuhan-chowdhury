import React, { Component } from "react";
import './PagesCss/Home.css';
const Home = () => {
    return(
        <>
        <div className="home_container">
        <div className="intro aIntro" id="intro">
                <h1>hi! <pre>i'm nuhan chowdhury</pre></h1>
                <h2 id="h2">i'm a designer</h2>
            </div>
            <button type="button">DOWNLOAD CV</button>
        </div>
        </>
    )
}

export default Home;