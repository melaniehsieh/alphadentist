import React from "react";
import "./styles.css";
// import summary from "./summary.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing = () => {
  return (
    <div id="section1">
      <div className="container">
        {/* <img src={summary} alt="title" /> */}
        <div className="title_text">
          <h1>Name</h1>
          <h4>description</h4>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
