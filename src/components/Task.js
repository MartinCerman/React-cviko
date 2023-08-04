import { useEffect, useState } from "react";
import "./Task.css";

const Task = ({ menTotal, womenTotal }) => {
  //vypocitat metry za hodinu
  const [meters, setMeters] = useState("");
  const [hours, setHours] = useState("");
  
  const metersPerHourTotal = menTotal + womenTotal * 0.5;

  const metersChange = (e) => {
    setMeters(e.target.value);
  };

  const hoursChange = (e) => {
    setHours(e.target.value);
  };

  const setButtonActivation = ()=>{
    const subminBtn = document.querySelector(".planning-btn")
    subminBtn.setAttribute("disabled", "disabled");
    subminBtn.style.backgroundColor = "red";

    if(+meters && +hours){
      if((+meters / +hours) <= metersPerHourTotal){
        subminBtn.style.backgroundColor = "green";
        subminBtn.removeAttribute("disabled");
      } else {
      }
    }
  }

  useEffect(setButtonActivation, [meters, hours, metersPerHourTotal])

  return (
    <div className="task-container">
      <h2>PLANNING EXCAVATION WORKS</h2>
      <p>Men: {menTotal}</p>
      <p>Women: {womenTotal}</p>
      <form onSubmit={(e)=>{
        e.preventDefault();
        window.alert("Práce zadána");
      }}  >
        <input
          type="text"
          name="meters"
          placeholder="Enter meters..."
          value={meters}
          onChange={metersChange}
        />
        <input
          type="text"
          name="hours"
          placeholder="Enter the hours..."
          value={hours}
          onChange={hoursChange}
        />
        <button className="planning-btn" disabled>
          Work planning
        </button>
      </form>
    </div>
  );
};

export default Task;
