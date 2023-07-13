import Image from "next/image";
import React from "react";
import intern from "../../public/img/intern.jpeg";

export default function Experience() {
  return (
    <section>
      <div>
        <h3 className="text-center text-3xl py-1 dark:text-white">
        My Work History
        </h3>
        <p className="text-center text-md py-2 leading-4 text-gray-800 dark:text-gray-300">
        : (I am always looking for new experience and different technologies
        </p>
      </div>
      <div className="lg:flex gap-3">
        <div className="text-center shadow-lg p-5 rounded-xl my-5  dark:bg-white flex-1">
          <Image src={intern} width={70} height={70} className="mx-auto" />
          <h3 className="text-lg font-medium pt-4 pb-2">
            Internship at Interns Pakistan
          </h3>
          <h4>Frontend Developer</h4>
          <i className="text-sm">(Jun 2023 - Aug 2023)</i>
          <p className="py-2">
            Interns Pakistan is a remote based internship program for Developers.During this internship I practice with projects to advance my skills in Frondend Development through different challanges
          </p>
          <h4 className="py-2 text-teal-400 dark:text-red-400">
          The technology used
          </h4>
          <p className="text-gray-800 py-1">HTML</p>
          <p className="text-gray-800 py-1">CSS</p>
          <p className="text-gray-800 py-1">JavaScript</p>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">Php</p>
          <p className="text-gray-800 py-1">...</p>
        </div>
      </div>   
    </section>
  );
}
