
import React from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // Import your CSS file for styling
import instagram from '../img/instagram.svg';
import instaicon from '../img/instaicon.svg'; // Replace with the path to your static image
import linkedin from '../img/linkedin.svg';
import linkedicon from '../img/linkedicon.svg';

const Links = () => {
  return (
    <>
      <div class="flex justify-center left-14 md:left-0 right-0 mt-0 md:mt-8 absolute">
        <div className="container">
          <motion.div className="static-container" whileHover={{ scale: 1.2 }}>
            <div className="rounded-full p-4 bg-rose-100">
              <img src={instaicon} alt="Insta Icon" className="insta-icon" />
            </div>
          </motion.div>

          <motion.div
            className="circle-container"
            whileHover={{ opacity: 1, scale: 60 }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
          >
            <img src={instagram} alt="Instagram" className="instagram-icon" />
          </motion.div>
        </div>

        <div className="container">
          <motion.div className="static-container" whileHover={{ scale: 1.2 }}>
            <div class="rounded-full p-4 bg-indigo-100 z-1">
                <img src={linkedicon} alt="linkedin Icon" className="linked-icon" />
            </div>
          </motion.div>

          <motion.div
            className="circle-container"
            whileHover={{ opacity: 1, scale: 1.2 }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
          >
            <div class="">
            <img src={linkedin} alt="linkedin" className="linked-icon " />
                </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Links;