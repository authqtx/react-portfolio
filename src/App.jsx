import React from "react";
import Name from "./components/Name";
import "./index.css";
import Bio from './components/Bio';
import Links from "./components/Links";
import NavbarComponent from "./components/NavbarComponent";
import ParallaxText from "./components/ParallaxText";

function App() {
  return (
    <>
    <Name />
    <Bio />
    <Links />
      <section>
        {/* Using the ParallaxText component */}
        <ParallaxText baseVelocity={-2}>
          REACTJS‎ ‎ ‎ ‎NEXTJS‎ ‎ ‎ ‎ ‎NODEJS‎ ‎ ‎ ‎ ‎ EXPRESSJS ‎ ‎ ‎ ‎ ‎{" "}
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          GASP‎ ‎ ‎ ‎ ‎FRAMER-MOTIO ‎ ‎ ‎ ‎ ‎REACT-SPRING
        </ParallaxText>
      </section>
    </>
  );
}

export default App;
