import React, { useState, useEffect } from "react";
import "./styles.css";
import Analysis from "../Analysis/Analysis";
import { Link, animateScroll as scroll } from "react-scroll";

const AddForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [previous, setPrevious] = useState("");
  const [file, setFile] = useState(null);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="section-one" id="section2">
        <h3>Step 1: Basic Patient Information</h3>
        <input
          id="name"
          type="text"
          placeholder="Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="age"
          type="text"
          placeholder="Age:"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          id="gender"
          type="text"
          placeholder="Gender:"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          id="previous"
          type="text"
          placeholder="Previous illness:"
          value={previous}
          onChange={(e) => setPrevious(e.target.value)}
        />
      </div>
      <div className="section-two">
        <h3>Step 2: Upload an image of your Oral</h3>
        <input id="file" type="file" onChange={(e) => handleOnChange(e)} />
      </div>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>
          <span>Analyze</span>
        </button>
      </Link>
      <div>
        <Analysis
          id="section3"
          name={name}
          age={age}
          gender={gender}
          previous={previous}
          file={file}
        />
      </div>
    </form>
  );
};

export default AddForm;
