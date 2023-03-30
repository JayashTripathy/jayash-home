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
                &nbsp; Frontend development.
              </span>
            </p>
            <button className="btn text-2xl">
          
                <BsGithub size="28" color="white" /> Github
           
            </button>
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
      </div>
    </>
  );
}
