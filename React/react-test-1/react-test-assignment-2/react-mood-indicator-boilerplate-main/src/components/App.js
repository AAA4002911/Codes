import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [color, setColor] = useState("rgb(238, 241, 0)");
  const color_option = {
    happy : "rgb(238, 241, 0)",
    sad : "rgb(19, 0, 164)",
    sleepy : "rgb(35, 177, 0)",
    excited : "rgb(255, 0, 66)"
  };

  function handleChange(event) {
    const value = event.target.value;
    switch(value) {
      case "happy":
        setColor(color_option["happy"]);
        break;
      case "sad":
        setColor(color_option["sad"]);
        break;
      case "sleepy":
        setColor(color_option["sleepy"]);
        break;
      case "excited":
        setColor(color_option["excited"]);
    }
  }

  return (
    <div id="main">
      <select onChange={handleChange}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="sleepy">Sleepy</option>
        <option value="excited">Excited</option>
      </select>
      <div id="mood-indicator" style={{backgroundColor: `${color}`}}></div>
    </div>
  )
}

export default App;