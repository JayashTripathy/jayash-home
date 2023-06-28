import React from "react";

const skills = [
  {
    name: "Javascript",
    img: "javascript",
  },
  {
    name: "Node JS",
    img: "node-js",
  },
  {
    name: "React JS",
    img: "react",
  },
  {
    name: "React Router",
    img: "react-router",
  },
  {
    name: "Next JS",
    img: "next",
  },
  {
    name: "JQuery",
    img: "jquery",
  },
  {
    name: "Expess JS",
    img: "express",
  },

  {
    name: "Mongo DB",
    img: "mongo",
  },
  {
    name: "HTML5",
    img: "html5",
  },
  {
    name: "CSS3",
    img: "css3",
  },
  {
    name: "Tailwind CSS",
    img: "tailwind",
  },
  {
    name: "Git & Github",
    img: "git",
  },
];

export default function Skills() {
  return (
    <div className="w-[100%]   px-6">
      <h1 className="text-6xl italic font-black mb-10 ">expertise.</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        {skills.map((skill) => {
          return (
            <div className=" h-40 w-full dark:bg-gray-900 bg-gray-200 border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:text-secondary">
              <img
                src={`./icons/${skill.img}.svg`}
                className="max-w-[5rem]"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
