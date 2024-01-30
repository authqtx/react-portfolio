import React from "react";
import Name from "./components/Name";
import "./index.css";
import Bio from './components/Bio';
import Links from "./components/Links";
import NavbarComponent from "./components/NavbarComponent";
import ParallaxText from "./components/ParallaxText";
import Card from "./components/card";

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
      <Card
        imageUrl="https://i.pinimg.com/564x/b4/37/17/b437178f48f57a0484b9860d7e8c0b8d.jpg"
        header="Discord Clone"
        description="This is a simple card component with hover effect and background text."
      />
    </>
  );
}

export default App;
