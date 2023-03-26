import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { BiLinkExternal } from "react-icons/bi";

import { useEffect } from "react";
import $ from "jquery";

export default function Home() {
  useEffect(() => {
    const heroPicChange = () => {
      const randomNumber = Math.floor(Math.random() * 3);

      $(".hero-pic img").attr("src", `/pic-${1 + randomNumber}.png`);
    };

    setInterval(heroPicChange, 2500);
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

          <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">
            <div className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom hover:shadow-hover-bottom">
              <div className="text-2xl italic font-bold pb-2">
                High On Calories
              </div>
              <p className="font-medium text-xs pb-2 leading-[.9rem] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                laudantium officia pariatur natus,
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
              <div className="pro-links ">
                <button className="btn font-thin ">
                  Github <BiLinkExternal size="20" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom hover:shadow-hover-bottom">
              <div className="text-2xl italic font-bold pb-2">
                High On Calories
              </div>
              <p className="font-medium text-xs pb-2 leading-[.9rem] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                laudantium officia pariatur natus,
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
              <div className="pro-links ">
                <button className="btn font-thin ">
                  Github <BiLinkExternal size="20" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom hover:shadow-hover-bottom">
              <div className="text-2xl italic font-bold pb-2">
                High On Calories
              </div>
              <p className="font-medium text-xs pb-2 leading-[.9rem] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                laudantium officia pariatur natus,
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
              <div className="pro-links ">
                <button className="btn font-thin ">
                  Github <BiLinkExternal size="20" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom hover:shadow-hover-bottom">
              <div className="text-2xl italic font-bold pb-2">
                High On Calories
              </div>
              <p className="font-medium text-xs pb-2 leading-[.9rem] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                laudantium officia pariatur natus,
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
              <div className="pro-links ">
                <button className="btn font-thin ">
                  Github <BiLinkExternal size="20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
