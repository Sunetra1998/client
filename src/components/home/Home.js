import React from "react";
import "./Home.css";
import Navbar from "./navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="container-fluid parent">
        <div className="container-left">
          <h1>
            Let's Find that
            <br />
            Best Candidate...
          </h1>
          <p className="paragraph">
            Source,screen,rank candidates
            <br />
            from multiple job brands,internal and external database
          </p>
          <button type="btn" className="btn">
            Get Started
          </button>
        </div>
        <div className="container-right">
          <video
            width="540"
            height="300"
            poster="https://www.expertia.ai/expertiaLogotext.png"
            controls
          >
            <source
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <p className="pa">with Expertia</p>
    </div>
  );
};

export default Home;
