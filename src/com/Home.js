import React from "react";
import Config from "../config";

function Home() {
    return (
        <div id="home" className="home-container col-xl-8 mx-auto">
            <div className="row">
                <h4 className="mini-heading">Hi, my name is</h4>
                <h1 className="dark-big-heading">{Config.portfolioName}</h1>
                <h2 className="light-big-heading">{Config.tagLine}</h2>
                <p className="paragraph">{Config.overview}</p>
                <div className="navbar">
                    <a className="nav-link btn rounded-3 p-2" href={"mailto:" + Config.email}>
                        Say Hello
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
