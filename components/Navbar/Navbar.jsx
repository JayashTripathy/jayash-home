import React from "react";
// import "./Navbar.module.scss";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsMoonFill, BsTwitter } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

import Link from "next/link";

const Navbar = () => {
  


  const handleTheme = () => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      return;
    }
    html.classList.add("dark");
    console.log(html);
  };
  return (
    <>
      <div className="navbar-container">
        <Link href="/" className="name-logo">
          <div className="main-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.28 345.64">
              <defs></defs>
              <g id="Layer_3" data-name="Layer 3">
                <path
                  class="cls-1"
                  d="M584.5,228v74.5l-101-1.16V429.5c-52-4-70.33,54.14-70.33,54.14V354.9a27,27,0,0,0,0-52.8V228Z"
                  transform="translate(-152.22 -228)"
                />
              </g>
              <g id="Layer_2" data-name="Layer 2">
                <path
                  class="cls-1"
                  d="M380.5,328.5A27,27,0,0,0,400,354.44V461.5c.61,151-257.5,148-247.5,0h92.16c0,49,64.6,54,64.6,0l.51-233.5H400v74.56A27,27,0,0,0,380.5,328.5Z"
                  transform="translate(-152.22 -228)"
                />
              </g>
            </svg>
          </div>
          {/* <span></span> Jayash <span>Tripathy</span> */}
        </Link>

        <div className="social-links ">
          <div className="links">
            <Link href="/blogs">Blogs</Link>
            <span className="opacity-50 text-sm font-thin"> | </span>
            <Link href="/now" className="now-page">
              Now
            </Link>
            {/* <span className="opacity-50 text-sm font-thin" > | </span>
            <div className="projects">Projects</div> */}
            <span className="opacity-50 text-sm font-thin"> | </span>
            <Link  href="/hire-me" className="hire-me">Hire Me</Link>

            <span className="opacity-50 text-sm font-thin"> | </span>
            <Link href="/connect" className="connect-page">
              Connect
            </Link>
          </div>
          <button
            onClick={handleTheme}
            id="dark-toggle"
            className="border-0 bg-transparent cursor-pointer transition-all duration-500 ml-5 "
          >
            <div className="hidden dark:flex   ">
              <BsSunFill size="26" color="black" />
            </div>
            <div className="dark:hidden flex">
              <BsMoonFill size="22" color="black" />
            </div>
          </button>
          {/* <div className="socials">
            <a href="google.com" target="_blank">
              <button className="github">
                <FiGithub color="white" size="21" />
              </button>
            </a>
            <a href="google.com" target="_blank">
              <button className="github">
                <GrLinkedinOption color="white" size="23" />
              </button>
            </a>
            <a href="https://www.google.com/" target="_blank">
              <button className="github">
                <BsTwitter color="white" size="23" />
              </button>
            </a>
          </div> */}
        </div>


        {/* navbar for small screens */}

        
      </div>
    </>
  );
};

export default Navbar;
