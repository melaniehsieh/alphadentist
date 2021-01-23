import React from "react";
import "./styles.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing = () => {
  return (
    <div id="section1">
      <h1>Name</h1>
      <h3>description</h3>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className="btn">Get Started</button>
      </Link>
    </div>
  );
};

export default Landing;
