import React from "react";
import Name from "./components/Name";
import "./index.css";
import Links from "./components/Links";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Name />
      <Links />
    </>
  );
}

export default App;
