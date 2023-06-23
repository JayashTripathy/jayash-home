import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect } from "react";
import $ from "jquery";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home({ posts }) {
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
                <div className="text-xl opacity-60 font-semibold mb-5 italic ">
                  Frontend Developer
                </div>
              </span>
            </div>
            <div className="hero-subtext  ">
              Crafting clean and functional web apps that enhance user
              experience and drive business growth
              {/* <span className="highlight-text italic-text">
                &nbsp; Web development.
              </span> */}
            </div>
            <div className="flex flex-row gap-1">
              <Link href="https://github.com/JayashTripathy" target="_blank">
                <button className="btn text-2xl relative shine-p">
                  <span className="shine"></span>
                  <BsGithub size="20" color="white" />
                </button>
              </Link>
              <Link href="https://www.linkedin.com/in/jayash-tripathy/" target="_blank">
                <button className="btn text-2xl relative shine-p">
                  <span className="shine"></span>
                  <GrLinkedinOption size="20" color="white" />
                </button>
              </Link>
              <Link href="https://twitter.com/jayash_tripathy" target="_blank">
                <button className="btn text-2xl relative shine-p">
                  <span className="shine"></span>
                  <BsTwitter size="20" color="white" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[100%]   px-7">
          {posts.map((post, index) => (
            <>
            <h1 className="text-6xl italic font-black mb-10 ">blogs</h1>
            <div className="border-3 border-solid rounded-xl p-3 relative">

            <Link className=" text-center gap-2 text-3xl font-bold " key={index} href={`/blogs/${post.slug}`}>{post.frontMatter.title}
            </Link>
            <span className="absolute  items-center right-[-10px] bg-primary dark:bg-secondary rounded-full text-secondary bg-text-primary flex p-1 ">
              <BiLinkExternal size="20"/>

            </span>
            </div>
            </>
          ))}
        </div>

        <div className="w-[100%]   px-7">
          <h1 className="text-6xl italic font-black mb-10 ">projects.</h1>

          <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">


            {/* projects */}
            <ProjectCard
              title="Profile Card"
              description="💳 Lets you Create an awesome terminal card. does string manipulation under the hood"
              image="https://res.cloudinary.com/df0aad0ku/image/upload/v1685871547/Screenshot_2023-06-04_150547_tb5zgp.png"
              github="https://github.com/JayashTripathy/profile-card"
              npm="https://www.npmjs.com/package/jayash"
              techStack={["node-js", "npm"]}
            />

            <ProjectCard
              title="jayash.space"
              description="🌌 My personal space on the internet"
              image="./ss/js-1.png"
              github="https://github.com/JayashTripathy/jayash-home"
              demo="https://jayash.space"
              techStack={["react", "next", "tailwind", "mdx"]}
            />
            <ProjectCard
              title="OpInHacks"
              description="🚀 36-hour tech-themed hackathon website"
              image="./ss/oh.png"
              github="https://github.com/JayashTripathy/OpInHacks"
              demo="https://opinhacks.co/"
              techStack={["react", "javascript"]}
            />
            <ProjectCard
              title="High On Calories"
              description="🍕 Recipe application built with the edamame API"
              image="./ss/hoc.png"
              github="https://github.com/JayashTripathy/High-On-Calories"
              demo="https://jayashtripathy.github.io/High-On-Calories/"
              techStack={["react", "javascript"]}
            />


          </div>
        </div>

        {/* Experience section  */}
        <div className="w-[100%]    px-6 ">
          <h1 className="text-6xl italic font-black mb-8">work.</h1>

          <div className="flex flex-row justify-between gap-2">
            <div className=" text-xl ">
              <h2 className="font-bold   leading-10 m-0">
                {" "}
                Google developer students club BITD
              </h2>
              <h2 className=" text-lg opacity-80 mt-0 italic">
                {" "}
                Web Development lead
              </h2>
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
        <div className="w-[100%]   px-6">
          <h1 className="text-6xl italic font-black mb-10 ">expertise.</h1>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/javascript.svg" className="w-[5rem]" alt="" />
              <p>Javascript</p>
            </div>

            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/node-js.svg" className="w-[5rem]" alt="" />
              <p>Node JS</p>
            </div>

            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/react.svg" className="w-[5rem]" alt="" />
              <p>React JS</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img
                src="./icons/react-router.svg"
                className="w-[5rem]  "
                alt=""
              />
              <p>React Router</p>
            </div>
            <div className=" h-40 w-full border-solid border-2 border-primary rounded-3xl flex justify-center items-center flex-col gap-1 dark:border-secondary">
              <img src="./icons/next.svg" className="w-[5rem]  " alt="" />
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

export const getStaticProps = async () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const slug = filename.split(".")[0];

    const { data } = matter(markdownWithMeta);

    return {
      frontMatter: data,
      slug: slug,
    };
  });

  return {
    props: { posts },
  };
};

