import React, { useState } from "react";
import "./styles.css";
import { VscTriangleUp } from "react-icons/vsc";
import Analysis from "../Analysis/Analysis";

const AddForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [previous, setPrevious] = useState("");
  const [image, setImage] = useState(null);

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
          <Analysis name={name} age={age} gender={gender} previous={previous} />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

export default AddForm;
