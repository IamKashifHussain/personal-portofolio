import Image from "next/image";
import React from "react";
import tms from "../../public/img/tms.png";
import heltertech from "../../public/img/heltertech.jpg";
import amazon from "../../public/img/amazon.png";
import doctor from "../../public/img/doctor.png";
import sell from "../../public/img/sell.png";
import student from "../../public/img/student.png";
export default function Portfolio() {
  return (
    <section>
      <h3 className="text-center text-3xl py-1 dark:text-white">Academic Projects</h3>
      <div className="lg:flex gap-5">
        <section className="container mx-auto p-5 md:py-10 px-0 md:p-10 md:px-0 flex-1">
          <section className=" ">
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-100 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${amazon.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div className="bg-black bg-opacity-20 min-h-100 px-5 flex flex-wrap flex-col pt-70 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-center text-white text-3xl mb-3 transform translate-y-10 group-hover:translate-y-0 duration-300">
                  Amazon Clone
                </h1>
                <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="text-center opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  Cloning Amazon landing page to advance my skills in HTML and CSS. I did this for practice purpose only
                </p>
              </div>
            </article>
          </section>
        </section>
        <section className="container mx-auto p-5 md:py-10 px-0 md:p-10 md:px-0 antialiased flex-1">
          <section className=" ">
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-100 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${doctor.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div className="bg-black bg-opacity-20 min-h-100 px-5 flex flex-wrap flex-col pt-70 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-center text-white text-3xl mb-3 transform translate-y-10 group-hover:translate-y-0 duration-300">
                  Doctor Machine-fyp
                </h1>
                <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="text-center opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  An Machine Learning based desktop application that predicts disease on the basis of symptoms
                </p>
              </div>
            </article>
          </section>
        </section>
        <section className="container mx-auto p-5 md:py-10 px-0 md:p-10 md:px-0 antialiased flex-1">
          <section className=" ">
            <article
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-100 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${sell.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div className="bg-black bg-opacity-20 min-h-100 px-5 flex flex-wrap flex-col pt-70 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-center text-white text-3xl mb-3 transform translate-y-10 group-hover:translate-y-0 duration-300">
                  sell & buy
                </h1>
                <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="text-center opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                A web based platform for selling and buying of goods. I contribute as Database Developer create Database structure, tables and manage queries
                </p>
              </div>
            </article>
          </section>
        </section>
        
      </div>
      <div className=" lg:flex  gap-5">
        <section className="container mx-auto transform duration-500 flex-1">
          <article className="shadow-lg mx-auto relative max-w-md group cursor-pointer">
            <div className="overflow-hidden">
              <Image
                src={heltertech}
                width={100}
                height={100}
                className="mx-auto w-full h-auto transform hover:scale-110 duration-200"
              />
            </div>
            <div className="p-4 my-auto pb-7 ">
              <h1 className="text-center text-4xl font-semibold text-gray-800 mt-4">
                HelterTeach
              </h1>
              <p className="text-center text-1xl text-gray-200 mt-2 leading-relaxed">
              HelterTech project developed with an idea to teach technology to new students. I contribute to this as social media handler
              </p>
            </div>
          </article>
        </section>
        <section className="container mx-auto transform duration-500 flex-1">
          <article className="shadow-lg mx-auto relative max-w-md group cursor-pointer">
            <div className="overflow-hidden">
              <Image
                src={student}
                width={100}
                height={100}
                className="mx-auto w-full h-auto transform hover:scale-110 duration-200"
              />
            </div>
            <div className="p-4 my-auto pb-7 ">
              <h1 className="text-center text-4xl font-semibold text-gray-800 mt-4">
                STM
              </h1>
              <p className="text-center text-1xl text-gray-400 mt-2 leading-relaxed">
              A web based student management system that hold student data. I contribute as Backend Developer
              </p>
            </div>
          </article>
        </section>
        <section className="container mx-auto transform duration-500 flex-1">
          <article className="shadow-lg mx-auto relative max-w-md group cursor-pointer">
            <div className="overflow-hidden">
              <Image
                src={tms}
                width={100}
                height={100}
                className="mx-auto w-full h-auto transform hover:scale-110 duration-200"
              />
            </div>
            <div className="p-4 my-auto pb-7 ">
              <h1 className="text-center text-4xl font-semibold text-gray-800 mt-4">
                DTMS
              </h1>
              <p className="text-center text-1xl text-gray-400 mt-2 leading-relaxed">
              A Web based department management system, teachers can view their schedule with specific id and admin manage the schedule and teachers. I contribute as a DataBase Developer
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
