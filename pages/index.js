import Link from "next/link";

import { BsGithub } from "react-icons/bs";
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
              </span>
            </div>
            <p className="hero-subtext">
              Digital crafter specializing in
              <span className="highlight-text italic-text">
                &nbsp; Web development.
              </span>
            </p>
            <a href="https://github.com/JayashTripathy" target="_blank">
              <button className="btn text-2xl">
                <BsGithub size="28" color="white" /> Github
              </button>
            </a>
          </div>
        </div>

        <div className="w-[100%] my-16">
          <h1 className="text-6xl italic font-black mb-10 ">Projects.</h1>

          <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">
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
                <Link href="/">
                  <img src="/icons/figma.svg" width="40" />
                </Link>
              </div>
              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/OpInHacks"
                  target="_blank"
                >
                  <button className="btn font-thin ">
                    Github <BsGithub size="20" />
                  </button>
                </a>
                <a href="https://opinhacks.co/" target="_blank">
                  <button className="btn font-thin ">
                    Website <BiLinkExternal size="20" />
                  </button>
                </a>
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
              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/High-On-Calories"
                  target="_blank"
                >
                  <button className="btn font-thin ">
                    Github <BsGithub size="20" />
                  </button>
                </a>
                <a
                  href="https://jayashtripathy.github.io/High-On-Calories/"
                  target="_blank"
                >
                  <button className="btn font-thin ">
                    Website <BiLinkExternal size="20" />
                  </button>
                </a>
              </div>
            </div>

            {/* project */}
            <div
              className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom shadow-primary hover:shadow-hover-bottom
              dark:border-secondary dark:shadow-secondary"
            >
              <div className="text-2xl italic font-bold pb-1">
                jayashtripathy.com
              </div>
              <p className="font-medium text-medium pb-3 leading-[1.2rem] ">
                🏠 My home on the internet
              </p>
              <div className="flex gap-1 flex-grow">
                <Link href="/">
                  <img src="/icons/react.svg" width="40" />
                </Link>
                <Link href="/">
                  <img src="/icons/javascript.svg" width="40" />
                </Link>
                <Link href="/">
                  <img src="/icons/figma.svg" width="40" />
                </Link>
              </div>
              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/jayash-home"
                  target="_blank"
                >
                  <button className="btn font-thin ">
                    Github <BsGithub size="20" />
                  </button>
                </a>
                <a href="https://opinhacks.co/" target="_blank">
                  <button className="btn font-thin ">
                    Website <BiLinkExternal size="20" />
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
                  <img src="/icons/javascript.svg" width="40" />
                </Link>
                <Link href="/">
                  <img src="/icons/figma.svg" width="40" />
                </Link>
              </div>
              <div className="pro-links flex gap-2">
                <a
                  href="https://github.com/JayashTripathy/Khat-Messaging-App"
                  target="_blank"
                >
                  <button className="btn font-thin ">
                    Github <BsGithub size="20" />
                  </button>
                </a>
                {/* <a href="https://opinhacks.co/" target="_blank">
                  <button className="btn font-thin ">
                    Website <BiLinkExternal size="20" />
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Experience section  */}
        <div className="w-[100%]  my-16">
          <h1 className="text-6xl italic font-black mb-10 ">Experience.</h1>

          <div className="flex flex-row justify-between gap-2">
            <div className=" text-xl">
              <h2 className="font-bold  pb-2 leading-10">
                {" "}
                Google developer students club BITD
              </h2>
              <h2 className=" text-lg opacity-80 "> Web Development lead</h2>
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
         <div className="w-[100%] my-16 ">
          <h1 className="text-6xl italic font-black mb-10 ">Tech I use</h1>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
          <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/node-js.svg" className="w-[5rem]" alt="" />
              <p>Node JS</p>
            </div>

            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/react.svg" className="w-[5rem]" alt="" />
              <p>React JS</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/react-router.svg" className="w-[5rem]  next-icon" alt="" />
              <p>React Router</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/next.svg" className="w-[5rem]  next-icon" alt="" />
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
