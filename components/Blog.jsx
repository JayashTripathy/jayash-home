import React from "react";

import Link from "next/link";

const Blog = ({ title, slug, date, topic, blogLink }) => {
    const topics = topic.split(" ");
    return (
        <>
            <div className="italic ">
                <div className="text-base text-gray-600 dark:text-gray-300  font-medium py-2  md:py-0  flex ">
                    <span className="">
                        {date}{" "}
                        {topics.map((topic, index) => {
                            return (
                                <span
                                    className="text-highlighting font-black bg-indigo-200 px-2 rounded mx-1 text-xs"
                                    key={index}
                                >
                                    #{topic}
                                </span>
                            );
                        })}
                    </span>
                </div>
                <Link
                    href={`/blogs/${blogLink}`}
                    className="blog-title  leading-tight text-3xl font-bold  md:text-2xl base-links"
                >
                    {title}
                </Link>
            </div>
        </>
    );
};

export default Blog;
