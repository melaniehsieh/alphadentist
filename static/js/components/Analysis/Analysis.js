import React from "react";
import "./styles.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import teeth from "./image_03.jpg";
import $ from "jquery";

const Analysis = ({ name, age, gender, previous }) => {
  return (
    <div id="section3">
      <h1>Patient’s Personal Information</h1>
      <h3> Patient Name: John Doe </h3>
      <h3> Patient Age: 81 </h3>
      <h3> Patient Gender: Male </h3>
      <h3> Patient Previous Illnesses: Type 1 diabetes </h3>
      <h1>Patient’s Oral Analysis</h1>
    </div>
  );
};

export default Analysis;
