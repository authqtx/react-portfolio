import React from "react";
import { motion } from "framer-motion";
import Ovalsvg from "./svgs/oval.svg"; // Replace with the correct path to your Ovalsvg file

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

const App = () => {
  return (
    <div className="relative">
      <div className="text-gray-50 font-Silkscreen font-normal text-4xl lg:text-9xl mt-8 lg:mt-48 mx-4 lg:mx-36">
        <h1>Auth</h1>
      </div>
      <motion.div className="svg-container absolute top-0 left-28">
        <motion.svg
          width="436"
          height="159"
          viewBox="0 0 436 159"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M259.153 13.0611C182.786 2.44244 -4.4955 22.7946 3.2321 86.9486C10.9597 151.103 133.238 163.049 241.424 152.873C349.611 142.696 428.706 97.1251 432.796 58.1899C436.887 19.2547 378.703 2 314.61 2C250.516 2 185.058 8.63664 105.964 29.8739"
            stroke="#7dff45"
            strokeWidth="4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            variants={draw}
            fill="#ffffff00" // Set your desired blue color here
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default App;
