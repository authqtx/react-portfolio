import { motion } from "framer-motion";
import { useEffect, useState } from "react";


// Animation variants for the path drawing effect
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 6, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

// Name component with SVG drawing animation
const Name = () => {
  // State to dynamically adjust SVG width based on window size
  const [svgWidth, setSvgWidth] = useState("100%");

  // Function to handle resizing and update SVG width
  useEffect(() => {
    const handleResize = () => {
      // Set new width based on window size
      const newWidth = window.innerWidth >= 768 ? "150%" : "100%";
      setSvgWidth(newWidth);
    };

    // Set initial width on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Container for the text and SVG */}
      <div className="">
        {/* Text element */}
        <div className="  font-Satoshi text-bold font-normal flex justify-center items-center text-clamp   md:ml-80 -mr-8  md:-mt-2 mt-8 mx-0   lg:mr-96 ">
          
          <h1 className="Auth text-white font-Inter ">Auth</h1>
          
          <motion.div className="svg-container -ml-64 md:size-72 size-42 md:-ml-80 mt-2 md:-mt-0 ">
          {/* SVG element with motion animation */}
          <motion.svg
            width={svgWidth}
            height="auto"
            viewBox="0 0 436 159"
            initial="hidden"
            animate="visible"
          >
            {/* SVG path with motion animation */}
            <motion.path
              d="M259.153 13.0611C182.786 2.44244 -4.4955 22.7946 3.2321 86.9486C10.9597 151.103 133.238 163.049 241.424 152.873C349.611 142.696 428.706 97.1251 432.796 58.1899C436.887 19.2547 378.703 2 314.61 2C250.516 2 185.058 8.63664 105.964 29.8739"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              variants={draw}
              fill="#ffffff00" // Set your desired blue color here
            />
          </motion.svg>
        </motion.div>
        </div>

        {/* SVG container with Framer Motion animation */}

      </div>

   

      
    </>
  );
};

export default Name;
