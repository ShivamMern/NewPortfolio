import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import html5 from "../assets/html5.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import scss from "../assets/scss.svg";
import tailwind from "../assets/tailwind.svg";
import git from "../assets/git.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import reactrouter from "../assets/reactrouter.svg";
import redux from "../assets/redux.svg";
import framer from "../assets/framer.svg";
import vite from "../assets/vitejs.svg";
import profile from "../assets/profile.png";
import CV from "../assets/CV.pdf";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="relative h-full container mx-auto">
        <div className="flex flex-col pt-24 lg:pt-32">
          <div className="w-full flex flex-col items-center lg:w-[72%] lg:flex-row lg:justify-between lg:mx-auto lg:mb-9">
            {/* blog shape */}
            <div className="flex lg:order-2">
              <div className="relative overflow-hidden w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-tr from-orange-400 to-green-400 rounded-blob animate-morph">
                <img
                  src={profile}
                  alt=""
                  className="absolute top-20 -left-3 lg:top-28 lg:-left-5 scale-[1.75]"
                />
              </div>
            </div>

            {/* text */}
            <div className="flex flex-col items-center lg:items-start">
            <h1 class="text-4xl lg:text-4xl font-bold my-5 lg:my-7 text-center lg:text-start ">Full-Stack Developer</h1>
            <p class="text-center lg:text-lg lg:text-start">Shivam Khandar : Crafting Digital Experiences from Concept to Code 🚀</p>
            <p class="text-center lg:text-lg lg:text-start">Full Stack Developer with a Flair for Frontend | React Maestro at TechQuadra</p>
            <div className="typewriter-container">
      <TypeAnimation
        sequence={[
          'React Developer',
          1000,
          'HTML, CSS, and JavaScript Developer',
          1000,
          'Node.js & Express.js Developer',
          1000,
          'MongoDB Developer',
          1000,
          'REST API Developer',
          1000,
          'AI Integration in React',
          1000,
          'Google AI API Integration',
          1000,
          'Google Maps API Integration',
          1000,
          'Stripe Payment Integration',
          1000,
          'Authentication Integration',,
          1000
        ]}
        wrapper="span"
        speed={50}
        className="typewriter-text"
        repeat={Infinity}
      />
    </div>
              <button className="bg-black text-white px-7 py-2 rounded my-5 lg:my-7">
                <a href={CV} download>
                  Download CV
                </a>
              </button>

              {/* social icons */}
              <div className="flex gap-x-2 lg:gap-x-4">
                <Link target="_blank" to="https://www.linkedin.com/in/shivam-khandar/">
                  <img src={linkedin} alt="" className="w-9 h-9" />
                </Link>

                <Link target="_blank" to="https://github.com/Shivam-khandar-au50">
                  <img src={github} alt="" className="w-9 h-9" />
                </Link>
              </div>
            </div>
          </div>

          {/* tech icons */}
          <div className="flex flex-col items-center mt-9 lg:flex-row lg:items-start lg:w-[72%] lg:mx-auto">
            <h1 className="text-center text-lg font-semibold tracking-wide border-b-2 pb-2 px-2 border-gray-600 lg:tracking-wider lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-5">
              Tech Stack
            </h1>

            <div className="relative w-full h-24 grid place-items-center overflow-hidden mt-7 lg:mt-0 lg:h-auto lg:flex-1 lg:pl-12 lg:pr-48 lg:pb-7">
              <div className="animate-scroll flex gap-x-5 whitespace-nowrap lg:animate-none lg:flex-wrap lg:gap-y-7">
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={html5} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={css} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={javascript} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={scss} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={tailwind} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={git} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={mongodb} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={express} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={nodejs} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={react} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={reactrouter} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={redux} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={framer} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={vite} alt="" className="w-9 h-9" />
                </div>

                {/* duplicate the icons */}
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={html5} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={css} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={javascript} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={scss} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={tailwind} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={git} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={mongodb} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={express} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={nodejs} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={react} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={reactrouter} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={redux} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={framer} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg shadow-orange-400">
                  <img src={vite} alt="" className="w-9 h-9" />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Home;
