import React from "react";
import { motion } from "framer-motion";
import "../index.css"; // Import your CSS file for styling
import instagram from "../img/instagram.svg";
import instaicon from "../img/instaicon.svg"; // Replace with the path to your static image
import linkedin from "../img/linkedin.svg";
import linkedicon from "../img/linkedicon.svg";
import gmail from "../img/gmail.svg";
import gmailicon from "../img/gmailicon.svg";

// Links component with Framer Motion animations
const Links = () => {
  return (
    <>
      {/* Container for the links */}
      <div className="flex justify-center left-14 md:left-0 right-0 mt-4 md:mt-8 absolute">
        {/* Instagram Link */}
        <div className="container relative">
          <a
            href="https://www.instagram.com/auth.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Static container with hover animation */}
            <div className="static-container" whileHover={{ scale: 1.2 }}>
              <div className="rounded-full p-4  flex items-center justify-center">
                <img src={instaicon} alt="Insta Icon" className="insta-icon" />
              </div>
            </div>

            {/* Circle container with Framer Motion animation */}
            <motion.div
              className="circle-container absolute inset-0"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="pointer-events-none flex items-center justify-center h-full">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="instagram-icon"
                />
              </div>
            </motion.div>
          </a>
        </div>

        {/* LinkedIn Link */}
        <div className="container relative">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Static container with hover animation */}
            <div className="static-container" whileHover={{ scale: 1.2 }}>
              <div className="rounded-full p-4 z-1 pointer-events-none flex items-center justify-center">
                <img
                  src={linkedicon}
                  alt="LinkedIn Icon"
                  className="linked-icon"
                />
              </div>
            </div>

            {/* Circle container with Framer Motion animation */}
            <motion.div
              className="circle-container absolute inset-0"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="pointer-events-none flex items-center justify-center h-full">
                <img src={linkedin} alt="LinkedIn" className="linked-icon" />
              </div>
            </motion.div>
          </a>
        </div>

        {/* Gmail Link */}
        <div className="container relative">
          <a href="mailto:Authfr@proton.me">
            {/* Static container with hover animation */}
            <div className="static-container" whileHover={{ scale: 1.2 }}>
              <div className="rounded-full p-4  z-1 pointer-events-none flex items-center justify-center">
                <img src={gmailicon} alt="Gmail Icon" className="linked-icon" />
              </div>
            </div>

            {/* Circle container with Framer Motion animation */}
            <motion.div
              className="circle-container absolute inset-0"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="pointer-events-none flex items-center justify-center left-16">
                <img src={gmail} alt="Gmail" className="linked-icon" />
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
