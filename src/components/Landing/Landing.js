import React from "react";
import "./styles.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing = () => {
  return (
    <div id="section1">
      <h1 style={{ fontSize: "50px" }}>AlphaDentist</h1>
      <h3>
        Welcome to AlphaDentist! An online platform for users to determine their
        likelihood of possessing oral illnesses. We understand your concerns and
        hope to make dental diagnoses free and accessible to all members of the
        community. Simply upload your patient information, a clear image of your
        teeth and gums, and we will take care of the rest!
      </h3>
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
