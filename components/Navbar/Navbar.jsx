import React from "react";
// import "./Navbar.module.scss";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import  Link from "next/link"

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link href="/" className="name-logo">
          {/* <span></span> Jayash <span>Tripathy</span> */}
        </Link>

        <div className="social-links">
          <div className="links">
            <Link href="/blogs">Blogs</Link>
            <div className="experience">Experience</div>
            <div className="projects">Projects</div>
            <div className="contact-me">Contact Me</div>
          </div>
          <div className="socials">
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
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
