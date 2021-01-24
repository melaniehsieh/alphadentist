import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing/Landing";
import AddForm from "./components/Form/AddForm";
import "./components/index.css";

const SomePage = () => {
  return (
    <div>
      <Landing />
      <AddForm />
    </div>
  );
};

ReactDOM.render(<SomePage />, document.getElementById("render-react-here"));
