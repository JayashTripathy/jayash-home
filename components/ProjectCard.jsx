import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import ImageWithFallback from "./ImageWithFallback";

function ProjectCard({
    title,
    description,
    github,
    demo,
    techStack,
    image,
    ...props
}) {
    const { npm } = props;

    return (
        <div
            className="flex flex-col gap-1 p-3 border-solid border-primary border-4 rounded-3xl transition duration-150 ease-in-out shadow-dark-bottom shadow-primary hover:shadow-hover-bottom
              dark:border-secondary dark:shadow-secondary"
        >
            <div className="text-2xl italic font-bold pb-1">{title}</div>
            <p className="font-medium text-medium pb-3 leading-[1.2rem] ">
                {description}
            </p>
            <div className="flex gap-1 flex-grow items-center ">
                {techStack?.map((tech, index) => (
                    <Link href="/" key={index}>
                        <ImageWithFallback
                            src={`/icons/${tech}.svg`}
                            fallback={`/icons/${tech}.png`}
                            width={35}
                            height={35}
                        />
                    </Link>
                ))}
            </div>
            <img src={image} alt="ss" className="w-full rounded-xl  my-3 " />
            <div className="pro-links flex gap-2">
                <Link href={github} target="_blank">
                    <button className="btn font-thin shine-p">
                        Github <BsGithub size="20" />
                        <span className="shine"></span>
                    </button>
                </Link>

                {demo && (
                    <Link href={demo} target="_blank">
                        <button className="btn font-thin shine-p">
                            Live Demo <BiLinkExternal size="20" />
                            <span className="shine"></span>
                        </button>
                    </Link>
                )}

                {npm && (
                    <Link href={npm} target="_blank">
                        <button className="btn font-thin shine-p">
                            Npm pkg <BiLinkExternal size="20" />
                            <span className="shine"></span>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
