import React, { useState } from "react";
import PropTypes from "prop-types";
import circle from "../img/circle.svg";

const NavbarComponent = ({ title }) => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  // Function to handle section clicks and toggle visibility
  const handleSectionClick = (section) => {
    // Toggle between sections or set to null if clicking the same section
    setActiveSection((prevActiveSection) =>
      prevActiveSection === section ? null : section,
    );
  };

  return (
    // Header container with a blurred backdrop
    <header className="fixed top-0 left-0 right-0 p-4 font-Lato">
      <div className="rounded-full bg-slate-100 bg-opacity-50 p-4 flex flex-col md:flex-row justify-end items-center backdrop-filter backdrop-blur-md">
        <div className="flex space-x-4 md:space-x-8">
          {/* Docs Section */}
          <div className="">
            <a
              href="#docs"
              className={`text-white mb-2 md:mb-0 md:mr-2 ${activeSection === "docs" ? "active" : ""}`}
              onClick={() => handleSectionClick("docs")}
            >
              Docs
            </a>
            {activeSection === "docs" && <img src={circle} />}
          </div>

          {/* Contact Us Section */}
          <div className="">
            <a
              href="#contact"
              className={`text-white mb-2 md:mb-0 md:mr-2 ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => handleSectionClick("contact")}
            >
              Contact Us
            </a>
            {activeSection === "contact" && <img src={circle} />}
          </div>

          {/* About Me Section */}
          <div className="">
            <a
              href="#about"
              className={`text-white mb-2 md:mb-0 ${activeSection === "about" ? "active" : ""}`}
              onClick={() => handleSectionClick("about")}
            >
              About Me
            </a>
            {activeSection === "about" && <img src={circle} />}
          </div>
        </div>
      </div>
    </header>
  );
};

// Prop type validation for the 'title' prop
NavbarComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavbarComponent;
