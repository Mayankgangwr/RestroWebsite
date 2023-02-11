import React from "react";
import Nav from "./component/nav";
import HomeSlider from "./component/Home-Slider";
import "./styles.css";

export default function App() {
  return (
    <>
    <Nav/>
    <div className="App">
    <HomeSlider/>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic ha!</h2>
    </div>
    </>
  );
}
