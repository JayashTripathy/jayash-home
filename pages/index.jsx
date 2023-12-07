import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect } from "react";
import $ from "jquery";
import ProjectCard from "../components/ProjectCard.jsx";
import Skills from "@/components/Skills.jsx";

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

    function getCoookie(name) {
        const cookies = document.cookie.split(";");

        for (const cookie in cookies) {
            const [cookieName, cookieVal] = cookies[cookie].split("=");

            if (cookieName.trim() === name) {
                return cookieVal;
            }
        }
    }

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
                                <span className="wavy-hand">👋 </span>Jayash
                                Tripathy{" "}
                                <div className="text-xl opacity-60 font-semibold mb-5 italic ">
                                    Frontend Developer
                                </div>
                            </span>
                        </div>
                        <div className="hero-subtext  ">
                            Crafting clean and functional web apps that enhance
                            user experience and drive business growth
                        </div>
                        <div className="flex flex-row gap-1">
                            <Link
                                href="https://github.com/JayashTripathy"
                                target="_blank"
                            >
                                <button className="btn text-2xl relative shine-p">
                                    <span className="shine"></span>
                                    <BsGithub size="20" color="white" />
                                </button>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/jayash-tripathy/"
                                target="_blank"
                            >
                                <button className="btn text-2xl relative shine-p">
                                    <span className="shine"></span>
                                    <GrLinkedinOption size="20" color="white" />
                                </button>
                            </Link>
                            <Link
                                href="https://twitter.com/jayash_tripathy"
                                target="_blank"
                            >
                                <button className="btn text-2xl relative shine-p">
                                    <span className="shine"></span>
                                    <RiTwitterXLine size="20" color="white" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-[100%]   px-7 ">
                    <h1 className="text-6xl italic font-black mb-10 ">blogs</h1>

                    <div className="grid gap-8">
                        {posts
                            .sort(
                                (a, b) =>
                                    new Date(b.frontMatter.date) -
                                    new Date(a.frontMatter.date),
                            )
                            .map(
                                (post, index) =>
                                    index < 2 && (
                                        <div
                                            className="bg-gray-500/20 rounded-xl p-3 relative"
                                            key={index}
                                        >
                                            <Link
                                                className=" text-center gap-2 text-3xl font-bold no-underline base-links"
                                                key={index}
                                                href={`/blogs/${post.slug}`}
                                            >
                                                {post.frontMatter.title}
                                            </Link>
                                            <span className="absolute  items-center right-[-10px] bg-primary dark:bg-secondary rounded-full text-secondary dark:text-primary flex p-1 ">
                                                <BiLinkExternal size="20" />
                                            </span>
                                        </div>
                                    ),
                            )}
                    </div>
                </div>

                <div className="w-[100%]   px-7">
                    <h1 className="text-6xl italic font-black mb-10 ">
                        projects.
                    </h1>

                    <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] ">
                        {/* projects */}
                        <ProjectCard
                            title="WiseFAQ"
                            description="no code AI enabled FAQ page builder 🛠️"
                            image="./ss/wisefaq.png"
                            github="https://github.com/JayashTripathy/wise-faq"
                            demo="https://wisefaq.vercel.app/"
                            techStack={[
                                "typescript",
                                "next",
                                "tailwind",
                                "postgresql",
                                "prisma",
                                "langchain",
                            ]}
                        />
                        <ProjectCard
                            title="Profile Card"
                            description="💳 Lets you Create an awesome terminal card. does string manipulation under the hood"
                            image="https://res.cloudinary.com/jayash/image/upload/v1685871547/Screenshot_2023-06-04_150547_tb5zgp.png"
                            github="https://github.com/JayashTripathy/profile-card"
                            npm="https://www.npmjs.com/package/jayash"
                            techStack={["node-js", "npm"]}
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
                                My primary duties as a web development lead at
                                Google Developer Students Club BITD include
                                managing events and everything else in addition
                                to leading bootcamps and seminars on web
                                development.
                            </p>
                        </div>
                        {/* <img src="/gdsc.svg" alt="" width="100px" /> */}
                    </div>
                </div>

                <Skills />
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const fs = require("fs");
    const path = require("path");
    const matter = require("gray-matter");

    const files = fs.readdirSync(path.join("content/posts"));

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join("content/posts", filename),
            "utf-8",
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
