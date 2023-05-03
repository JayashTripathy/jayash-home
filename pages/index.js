import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import {BsTwitter } from "react-icons/bs";

import { BiLinkExternal } from "react-icons/bi";

import { useEffect } from "react";
import $ from "jquery";

export default function Home() {
  const heroPicChange = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    $(".hero-pic img").attr("src", `/pic-${1 + randomNumber}.png`);
  };

  useEffect(() => {
    const loadHeroPic = setInterval(heroPicChange, 2000);

    return () => {
      clearInterval(loadHeroPic);
    };
  }, []);

  return (
    <>
      <div className="content-container">
        <div className="hero-container">
          <div className="hero-pic">
            <img src="/pic-1.png" alt="" />
          </div>
          <div className="hero-desc">
            <div className="hero-text">
              I am{" "}
              <span className="highlight-text">
                <span className="wavy-hand">👋 </span>Jayash Tripathy{" "}
                <div className="text-xl opacity-60 font-semibold mb-5 italic ">
                  Full Stack Developer
                </div>
              </span>
            </div>
            <div className="hero-subtext  ">
              Crafting clean and functional web apps that enhance user
              experience and drive business growth
              {/* <span className="highlight-text italic-text">
                &nbsp; Web development.
              </span> */}
            </div>
            <div className="flex flex-row gap-1">
              <Link href="https://github.com/JayashTripathy" target="_blank">
                <button className="btn text-2xl relative shine-p">
                  <span className="shine"></span>
                  <BsGithub size="20" color="white" />
                </button>
              </Link>
              <Link href="https://www.linkedin.com/in/jayash-tripathy/" target="_blank">
                <button className="btn text-2xl relative shine-p">
                  <span className="shine"></span>
                  <GrLinkedinOption size="20" color="white" /> 
                </button>
              </Link>
              <Link href="https://twitter.com/jayash_tripathy" target="_blank">
                <button className="btn text-2xl relative shine-p">
                  <span className="shine"></span>
                  <BsTwitter size="20" color="white" /> 
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[100%] my-10 px-7">
          <h1 className="text-6xl italic font-black mb-10 ">Projects.</h1>

          <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">
            {/* project */}
            <div
              className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom shadow-primary hover:shadow-hover-bottom
              dark:border-secondary dark:shadow-secondary"
            >
              <div className="text-2xl italic font-bold pb-1">jayash.space</div>
              <p className="font-medium text-medium pb-3 leading-[1.2rem] ">
                🌌 My personal space on the internet
              </p>
              <div className="flex gap-1 flex-grow items-center ">
                <Link href="/">
                  <img src="/icons/react.svg" width="40" />
                </Link>

                <Link className="next-icon" href="/">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" dark:fill-secondary"
                  >
                    <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    viewBox="0 0 32 32"
                    width="50"
                    height="50"
                    className=" dark:fill-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m20.3 16.5-3.9 3.9-4-3.9 1.1-1.1 2.1 2.1v-5.7h1.5v5.8l2.1-2.1zm-16.8-.8 2.7 2.7 2.8-2.7v4.4h1.5v-8.1l-4.3 4.3-4.2-4.3v8.1h1.5z" />
                    <path
                      d="m28.8 20-3.1-3.1-3.1 3.1-1-1.1 3.1-3.1-3.2-3.2 1.1-1 3.1 3.2 3.2-3.2 1.1 1-3.2 3.2 3.1 3.1z"
                      fill="#f9ac00"
                    />
                  </svg>
                </Link>
                <Link href="/">
                  <img src="/icons/tailwind.svg" width="40" />
                </Link>
              </div>
              <img
                src="./ss/js-1.png"
                alt="ss"
                className="w-full rounded-xl  my-3 dark:border-solid dark:border"
              />
              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/jayash-home"
                  target="_blank"
                >
                  <button className="btn font-thin shine-p">
                    Github <BsGithub size="20" />
                    <span className="shine"></span>
                  </button>
                </a>

                <a href="https://jayash.space" target="_blank">
                  <button className="btn font-thin shine-p">
                    Live Demo <BiLinkExternal size="20" />
                    <span className="shine"></span>
                  </button>
                </a>
              </div>
            </div>

            {/* project */}
            <div
              className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom shadow-primary hover:shadow-hover-bottom
              dark:border-secondary dark:shadow-secondary"
            >
              <div className="text-2xl italic font-bold pb-1">OpInHacks</div>
              <p className="font-medium text-medium pb-3 leading-[1.2rem] ">
                🚀 36-hour tech-themed hackathon website
              </p>
              <div className="flex gap-1 flex-grow">
                <Link href="/">
                  <img src="/icons/react.svg" width="40" />
                </Link>
                <Link href="/">
                  <img src="/icons/javascript.svg" width="40" />
                </Link>
              </div>
              <img
                src="./ss/oh.png"
                alt="ss"
                className="w-full rounded-lg  my-3 dark:border-solid dark:border"
              />

              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/OpInHacks"
                  target="_blank"
                >
                  <button className="btn font-thin shine-p ">
                    Github <BsGithub size="20" />
                    <span className="shine"></span>
                  </button>
                </a>
                <a href="https://opinhacks.co/" target="_blank">
                  <button className="btn font-thin shine-p">
                    Live Demo <BiLinkExternal size="20" />
                    <span className="shine"></span>
                  </button>
                </a>
              </div>
            </div>

            {/* project */}
            <div
              className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom shadow-primary hover:shadow-hover-bottom
              dark:border-secondary dark:shadow-secondary"
            >
              <div className="text-2xl italic font-bold pb-1">Khat</div>
              <p className="font-medium text-medium pb-3 leading-[1.2rem] ">
                📩 Khat allows users chat with anybody on the khat database
              </p>
              <div className="flex gap-1 flex-grow">
                <Link href="/">
                  <img src="/icons/react.svg" width="40" />
                </Link>
                <Link href="/">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" dark:fill-secondary"
                  >
                    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                  </svg>
                </Link>
                <Link href="/">
                  <img src="/icons/socket-io.svg" width="40" />
                </Link>
              </div>
              <img
                src="./ss/khat.png"
                alt="ss"
                className="w-full rounded-xl  my-3 dark:border-solid dark:border "
              />

              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/Khat-Messaging-App"
                  target="_blank"
                >
                  <button className="btn font-thin shine-p ">
                    Github <BsGithub size="20" />
                    <span className="shine"></span>
                  </button>
                </a>
                {/* <a href="https://opinhacks.co/" target="_blank">
                  <button className="btn font-thin ">
                    Website <BiLinkExternal size="20" />
                <span className="shine"></span>
                  </button>
                </a> */}
              </div>
            </div>

            {/* project */}
            <div
              className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom shadow-primary hover:shadow-hover-bottom
              dark:border-secondary dark:shadow-secondary"
            >
              <div className="text-2xl italic font-bold pb-1">
                High On Calories
              </div>
              <p className="font-medium text-medium pb-3 leading-[1.2rem] ">
                🍕 Recipe application built with the edamame API
              </p>
              <div className="flex gap-1 flex-grow">
                <Link href="/">
                  <img src="/icons/react.svg" width="40" />
                </Link>
                <Link href="/">
                  <img src="/icons/javascript.svg" width="40" />
                </Link>
              </div>
              <img
                src="./ss/hoc.png"
                alt="ss"
                className="w-full rounded-xl  my-3  dark:border-solid dark:border "
              />

              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/High-On-Calories"
                  target="_blank"
                >
                  <button className="btn font-thin shine-p ">
                    Github <BsGithub size="20" />
                    <span className="shine"></span>
                  </button>
                </a>
                <a
                  href="https://jayashtripathy.github.io/High-On-Calories/"
                  target="_blank"
                >
                  <button className="btn font-thin shine-p">
                    Live Demo <BiLinkExternal size="20" />
                    <span className="shine"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience section  */}
        <div className="w-[100%]  my-10 px-6 ">
          <h1 className="text-6xl italic font-black mb-8">Work.</h1>

          <div className="flex flex-row justify-between gap-2">
            <div className=" text-xl ">
              <h2 className="font-bold   leading-10 m-0">
                {" "}
                Google developer students club BITD
              </h2>
              <h2 className=" text-lg opacity-80 mt-0 italic">
                {" "}
                Web Development lead
              </h2>
              <p className="pt-4 leading-6 text-base opacity-60">
                My primary duties as a web development lead at Google Developer
                Students Club BITD include managing events and everything else
                in addition to leading bootcamps and seminars on web
                development.
              </p>
            </div>
            {/* <img src="/gdsc.svg" alt="" width="100px" /> */}
          </div>
        </div>

        {/* skills section  */}
        <div className="w-[100%] my-10 px-6">
          <h1 className="text-6xl italic font-black mb-10 ">Expertise.</h1>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/javascript.svg" className="w-[5rem]" alt="" />
              <p>Javascript</p>
            </div>

            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/node-js.svg" className="w-[5rem]" alt="" />
              <p>Node JS</p>
            </div>

            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/react.svg" className="w-[5rem]" alt="" />
              <p>React JS</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img
                src="./icons/react-router.svg"
                className="w-[5rem]  "
                alt=""
              />
              <p>React Router</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/next.svg" className="w-[5rem]  " alt="" />
              <p>Next JS</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/jquery.svg" className="w-[5rem]" alt="" />
              <p>JQuery</p>
            </div>

            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/express.svg" className="w-[5rem]" alt="" />
              <p>Express JS</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/mongo.svg" className="w-[5rem]" alt="" />
              <p>Mongo DB</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/html5.svg" className="w-[5rem]" alt="" />
              <p>HTML5</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/css3.svg" className="w-[5rem]" alt="" />
              <p>CSS3</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/tailwind.svg" className="w-[5rem]" alt="" />
              <p>Tailwind CSS</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/git.svg" className="w-[5rem]" alt="" />
              <p>Git & Github</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
