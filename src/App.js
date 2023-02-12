import React, { useEffect, useState } from "react";
import Nav from "./component/nav";
import HomeSlider from "./component/Home-Slider";
import "./styles.css";

export default function App() {
  const [subdomain, setSubdomain] = useState(null);
  useEffect(() => {
    const host = window.location.host;
    const arr = host
      .split(".")
      .slice(0, host.includes("myrestro.co.in") ? -1 : -2);
    if (arr.length > 0) setSubdomain(arr[0]);
  }, []);
  return (
    <>
      <Nav />
      <HomeSlider />
      <div className="App">
        <h1>{subdomain}</h1>
        <h2>Start editing to see some magic ha!</h2>
      </div>
    </>
  );
}
