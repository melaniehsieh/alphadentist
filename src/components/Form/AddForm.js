import React, { useState } from "react";
import "./styles.css";
import { VscTriangleUp } from "react-icons/vsc";
import { Link, animateScroll as scroll } from "react-scroll";

const AddForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [previous, setPrevious] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleOnChange = (e) => {
    setImage(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      setShowData(true);
    } catch (e) {
      console.log(e);
    }
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
        <input id="image" type="file" onChange={(e) => handleOnChange(e)} />
      </div>
      <div className="section-three">
        <h3>Step 3: Share medical data with dentist (Optional)</h3>
        <input
          id="email"
          type="email"
          placeholder="Dentist email address:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>
        {isLoading ? (
          <div>
            <VscTriangleUp className="spinner" />
            <span>Analyzing...</span>
          </div>
        ) : (
          <span>Analyze</span>
        )}
      </button>
      <div>
        {showData ? (
          <Analysis
            name={name}
            age={age}
            gender={gender}
            previoius={previous}
          />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

export default AddForm;

const Analysis = ({ name, age, gender, previous }) => {
  return (
    <div id="section3">
      <h1>Patient’s Personal Information</h1>
      <h3> Patient Name: {name} </h3>
      <h3> Patient Age: {age} </h3>
      <h3> Patient Gender: {gender} </h3>
      <h3> Patient Previous Illnesses: {previous} </h3>
    </div>
  );
};
