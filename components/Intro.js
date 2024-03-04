import React from "react";
import { FaPython, FaJava, FaNodeJs, FaReact } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro-section bg-gray-100 p-10 rounded-lg shadow-md">
      <div className="text-content">
        <h1 className="text-4xl font-bold text-blue-600">
          Abdulhamid Alhafufi
        </h1>
        <p className="tagline text-lg mt-2 text-gray-700">
          Computer engineer with a passion for web development, mobile app
          development and cloud computing.
        </p>
        <p className="skills flex items-center mt-4 text-gray-600">
          Skilled in <FaPython className="inline-block ml-2 text-2xl text-blue-500" /> Python, <FaJava className="inline-block ml-2 text-2xl text-red-500" /> Java, and <FaNodeJs className="inline-block ml-2 text-2xl text-green-500" /><FaReact className="inline-block ml-2 text-2xl text-blue-300" /> MERN Full Stack development.
        </p>
      </div>
    </div>
  );
};

export default Intro;
