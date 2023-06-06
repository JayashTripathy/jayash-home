import React from "react";

function Now() {
  return (
    <div className="mx-auto max-w-[50%] my-16 md:max-w-[85%]">
      <div className="flex flex-col mb-10">
        <h1 className="text-6xl font-black m-0 mb-2">Now🎯</h1>
        <p className="text-sm m-0 mb-8">What i am upto now.</p>

        <br />
      </div>
      <div className="content leading-6">
        <div className="text-4xl font-bold mb-4 mt-8">Life 🔆</div>
        <p>
          I live in Bhilai, Chattisgarh, with my family and a cute dog 🐕‍🦺(mixy).
          Currently pursuing a Btech in Information Technology at{" "}
          <a
            href="https://bitdurg.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-redirect"
          >
            {" "}
            Bhilai Institute of Technology, Durg{" "}
          </a>
          Graduating in 2024.
        </p>

        <div className="text-4xl font-bold mb-4 mt-16">Work 💼</div>
        <p>
          From past 2 years i have been working as a Web developer ,Worked for
          orgs like Google Develper Students Club BITD as a Web developement
          lead ,{" "}
          <a
            href="https://opinhacks.co"
            target="_blank"
            rel="noopener noreferrer"
            className="p-redirect"
          >
            OpInHacks
          </a>{" "}
          a general themed hackathon that will be going held in Chhattisgarh
          <br />
          <br />
          In addition, prior to entering the tech industry, I worked as a
          graphic designer for leading institutions such as
          <a
            href="https://www.ted.com/tedx/events/40245"
            target="_blank"
            rel="noopener noreferrer"
            className="p-redirect"
          >
            {" "}
            TedX{" "}
          </a>
          , PositivityXO,
          <a
            href="https://www.newtonschool.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-redirect"
          >
            {" "}
            Newton School{" "}
          </a>
          , and others.
        </p>

        <div className="text-4xl font-bold mb-4 mt-16">Learning 🏫</div>
        <br />
        <img src="/now/df.jpg" width="100%" alt="" />
        <br />
        <p>
          We organised DurgFOSS this past March! Great learning experiences were
          had throughout the journey.
        </p>

        <div className="text-4xl font-bold mb-4 mt-16">Reading 📙</div>
        <p>
          I have trouble finding the time to read, but when I do, I’m currently
          making my way through these books:
        </p>
        <ul>
          <li>
            Steal Like an Artist ~{" "}
            <span className="opacity-50"> by Austin Kleon </span>
            ✅
          </li>
          <li>
            Cant Hurt Me  ~{" "}
            <span className="opacity-50"> by David Goggins </span>
            
          </li>
        </ul>

        
      </div>
    </div>
  );
}

export default Now;
