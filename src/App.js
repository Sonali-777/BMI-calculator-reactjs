import "./App.css";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [range, setRange] = useState("");

  const calculateBMI = () => {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBMI("Your BMI is " + bmi);

    let status = getStatus(bmi);
    setStatus(status);
    setHeight("");
    setWeight("");
    let range = getRange(weight);
    setRange(range);
  };
  const getStatus = (bmi) => {
    if (bmi < 18.5) return "you are in underweight range";
    else if (bmi > 18.4 && bmi < 24.9) return "you are in healthy weight range";
    else if (bmi > 24.8 && bmi < 29.9) return "you are in overweight range";
    else return " You are in obese range";
  };
  const getRange = (weight) => {
    if (weight < 50) return "Your suggested weight range is between 1 - 49";
    else if (weight > 49 && weight < 68)
      return "Your suggested weight range is between 50 - 67";
    else if (weight > 68)
      return "Your suggested weight range is between 69 - 100";
    else return "Your suggested weight is more than 100.";
  };

  return (
    <div className="App">
      <div className="BMI-calculator">
        <div className="header">
          <h2>BMI CALCULATOR</h2>
        </div>
        <div className="content">
          <form>
            <label>Enter your height in cm:</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <label>Enter your weight in kg:</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </form>
          <button type="button" onClick={calculateBMI}>
            Submit
          </button>
          <p> {bmi}</p>
          <p>{range}</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
