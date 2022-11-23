import React, {Component, useState} from "react";
import '../styles/App.css';
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const App = () => {
  return (
    <div id="main">
        <Project1/>
        <Project2/>
        <Project3/>
    </div>
  )
}


export default App;
