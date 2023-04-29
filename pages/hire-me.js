import React from "react";
import { IoDocumentText } from "react-icons/io5";

function hireMe() {
  return (
    <>
      <div className="mx-auto max-w-[45%] min-h-[25rem] my-16 md:max-w-[85%]">
        <h1>🤝 Let's work together </h1>
        <p className="pt-8 mb-5">
          As a pre-final year IT student with exceptional web development
          skills, I am confident in my ability to contribute a unique
          perspective and valuable technical expertise to your team. My
          expertise in web development technologies, as well as my creativity,
          dedication, and team spirit, make me an ideal candidate for any
          developer position.
        </p>
        <button className="btn text-2xl resume-btn ">
          Get my resume
          <IoDocumentText size="25" color="white" />
        </button>
      </div>
    </>
  );
}

export default hireMe;
