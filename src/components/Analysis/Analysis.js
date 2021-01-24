import React from "react";
import "./styles.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import teeth from "./image_03.jpg";

const Analysis = ({ name, age, gender, previous }) => {
  return (
    <div id="section3">
      <h1>Patient’s Personal Information</h1>
      <h3> Patient Name: {name} </h3>
      <h3> Patient Age: {age} </h3>
      <h3> Patient Gender: {gender} </h3>
      <h3> Patient Previous Illnesses: {previous} </h3>
      <h1>Patient’s Oral Analysis</h1>
      <div className="container">
        <img src={teeth} alt="image" />
        <div>
          <h3> Chances of getting Gingivitis: </h3>
          <Progress percent={43} status="active" className="progress" />
        </div>
      </div>
      <button>Download PDF</button>
    </div>
  );
};

export default Analysis;
