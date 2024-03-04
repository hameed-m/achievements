import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const Tail = () => {
  return (
    <div className="contact-section bg-gray-100 p-10 rounded-lg shadow-md">
      <div className="text-content">
        <h1 className="text-4xl font-bold text-blue-600">
          Contact Information
        </h1>
        <p className="contact-item flex items-center mt-4 text-gray-600">
          <FaEnvelope className="inline-block mr-2 text-2xl text-blue-500" />
          <a href="mailto:a-alhafufi@outlook.sa">a-alhafufi@outlook.sa</a>
        </p>
        <p className="contact-item flex items-center mt-4 text-gray-600">
          <FaPhone className="inline-block mr-2 text-2xl text-green-500" />
          +966 56 505 8410
        </p>
        <p className="contact-item flex items-center mt-4 text-gray-600">
          <FaMapMarkerAlt className="inline-block mr-2 text-2xl text-red-500" />
          Saudi Arabia
        </p>
        <p className="contact-item flex items-center mt-4 text-gray-600">
          <FaLinkedin className="inline-block mr-2 text-2xl text-blue-300" />
          <a
            href="https://www.linkedin.com/in/a-alhafufi"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/a-alhafufi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Tail;
