import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BsGithub } from "react-icons/bs";
import { useEffect } from "react";
import $ from "jquery"; 



export default function Home() {
 

  useEffect(() => {
    const heroPicChange = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      $(".hero-pic img").attr("src", `/pic-${1 + randomNumber}.png`);
    };

    setInterval(heroPicChange, 2000);
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
              A self-taught{" "}
              <span className="highlight-text italic-text">
                Front-end developer
              </span>
              &nbsp; who is very much excited & curious about developing{" "}
              <span className="highlight-text italic-text ">
                cool web projects.
              </span>
            </p>
            <button className="btn">
              {" "}
              <BsGithub size="28" color="white" /> Github
            </button>
          </div>
        </div>

        {/* <div className="project-container">
            <h1 className="project-title section-title">Projects.</h1>
            <Cards/>
          </div> */}
      </div>
    </>
  );
}
