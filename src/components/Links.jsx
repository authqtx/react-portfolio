// links.jsx

import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // Import your CSS file for styling
import instagram from '../img/instagram.svg';
import instaicon from '../img/instaicon.svg'; // Replace with the path to your static image
import linkedin from '../img/linkedin.svg';
import linkedicon from '../img/linkedicon.svg';
import gmail from '../img/gmail.svg';
import gmailicon from '../img/gmailicon.svg';

const Links = () => {
  return (
    <>
      <div className="flex justify-center left-14 md:left-0 right-0 mt-0 md:mt-8 absolute">
        {/* Instagram */}
        <div className="container relative">
          <div className="static-container" whileHover={{ scale: 1.2 }}>
            <div className="rounded-full p-4 bg-rose-100 flex items-center justify-center">
              <img src={instaicon} alt="Insta Icon" className="insta-icon" />
            </div>
          </div>

          <motion.div
            className="circle-container absolute inset-0"
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none flex items-center justify-center h-full">
              <img src={instagram} alt="Instagram" className="instagram-icon" />
            </div>
          </motion.div>
        </div>

        {/* LinkedIn */}
        <div className="container relative">
          <div className="static-container" whileHover={{ scale: 1.2 }}>
            <div className="rounded-full p-4 bg-indigo-100 z-1 pointer-events-none flex items-center justify-center">
              <img src={linkedicon} alt="LinkedIn Icon" className="linked-icon" />
            </div>
          </div>

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
        </div>

        {/* Gmail */}
        <div className="container relative">
          <div className="static-container" whileHover={{ scale: 1.2 }}>
            <div className="rounded-full p-4 bg-gray-200 z-1 pointer-events-none flex items-center justify-center">
              <img src={gmailicon} alt="Gmail Icon" className="linked-icon" />
            </div>
          </div>

          <motion.div
            className="circle-container absolute inset-0"
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none flex items-center justify-center left-16 ">
              <img src={gmail} alt="Gmail" className="linked-icon" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Links;
