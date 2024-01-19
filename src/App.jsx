import React from "react";
import Name from "./components/Name";
import "./index.css";
import Links from "./components/Links";
import NavbarComponent from "./components/NavbarComponent";
import ParallaxText from "./components/ParallaxText";

function App() {
  return(
    <>
      <NavbarComponent />
      <Name />
      <Links />
      <section>
        {/* Using the ParallaxText component */}
        <ParallaxText baseVelocity={-2}>REACTJS NEXTJS NODEJS</ParallaxText>
        <ParallaxText baseVelocity={2}>GASP FRAMER-MOTION REACT-SPRING</ParallaxText>
      </section>
    </>
  );
}

export default App;
