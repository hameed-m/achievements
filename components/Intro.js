import React from "react";
import { FaPython, FaJava, FaNodeJs, FaReact, FaAws, FaVuejs } from "react-icons/fa";
import { TbBrandDjango, TbBrandFlutter } from "react-icons/tb";

const Intro = () => {
  return (
    <div className="intro-section bg-gray-100 p-5 rounded-lg shadow-md">
      <div className="text-content">
        <h1 className="text-4xl font-bold text-blue-600">
          Abdulhamid Alhafufi
        </h1>
        <p className="tagline text-lg mt-2 text-gray-700">
          Computer engineer with a passion for web development, mobile app
          development and cloud computing.
        </p>
        <p className="skills items-center mt-4 text-gray-600">
          <b>Skilled in:</b>
          <br/><FaPython className="inline-block text-2xl text-blue-500" /> Python
          <br/><FaJava className="inline-block text-2xl text-red-500" /> Java
          <br/><TbBrandFlutter className="inline-block text-2xl text-blue-500" /> Flutter
          <br/><TbBrandDjango className="inline-block text-2xl text-green-700" /> Django
          <br/><FaAws className="inline-block text-2xl text-yellow-700" /> AWS
          <br/><FaVuejs className="inline-block text-2xl text-green-600" /> Vue.js
          <br/><FaNodeJs className="inline-block text-2xl text-green-500" /><FaReact className="inline-block ml-2 text-2xl text-blue-300" /> MERN
        </p>
      </div>
    </div>
  );
};

export default Intro;
