import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header({ setDarkMode, darkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-2xl font-arial dark:text-white">[<TypeAnimation
        sequence={[
          "Software Developer",
          1000,
          "Web Developer",
          1000,
          "ML Enthusist",
          1000,
          "Cloud Enthusist",
          1000,
          "Team Player",
          1000,
        ]}
        speed={20}
        repeat={Infinity}
      />]</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl dark:text-white"
          />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kashif-hussain-1b81231a1/"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mr-8 font-yekan dark:from-red-600 dark:to-orange-600"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
