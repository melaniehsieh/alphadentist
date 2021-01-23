import React, { useEffect, useState } from "react";

import Landing from "./components/Landing/Landing";
import AddForm from "./components/Form/AddForm";

function App() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    fetch("/predict").then((res) => {
      res.json().then((data) => {
        setPrediction(data);
      });
    });
  }, []);

  return (
    <div>
      <h1>{prediction}</h1>
      <Landing />
      <AddForm />
    </div>
  );
}

export default App;
