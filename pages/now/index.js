import React from "react";

function Now() {
  return (
    <div className="mx-auto max-w-[50%] my-16 md:max-w-[85%]">
      <div className="flex flex-col mb-20">
        <h1 className="text-6xl font-black">Now🎯</h1>
        <p className="text-sm">What i am upto now.</p>

        <br />
      </div>
      <div className="content">
        <div className="text-4xl font-bold mb-4 mt-8">Life 🔆</div>
        <p>
          I live in Bhilai, Chattisgarh, with my family and a cute dog (mixy).
          Currently pursuing a Btech in Information Technology at{" "}
          <a
            href="https://bitdurg.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-redirect"
          >
            {" "}
            Bhilai Institute of Technology, Durg
          </a>
           Graduating in 2024.
        </p>

        <div className="text-4xl font-bold mb-4 mt-16">Work 💼</div>
        <p>
          From past 2 years i have been exploring and working as a front-end
          developer ,Worked for orgs like Google Develper Students Club BITD( as a
          Web developer) , <a
            href="https://opinhacks.co"
            target="_blank"
            rel="noopener noreferrer"
            className="p-redirect"
          >OpInHacks</a> (Hackathon) and etc
        </p>
      </div>
    </div>
  );
}

export default Now;
