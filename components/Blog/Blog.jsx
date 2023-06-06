import React from "react";

import Link from "next/link"

const blog = ({title, slug, date, topic, blogLink }) => {

  return (
    <>
    <div className="italic ">

      <div className="text-base text-gray-600 font-medium py-2  md:py-0">
        {date} <span className=" font-medium">{`#${topic}`}</span>
      </div>
      <Link  href={`/blogs/${blogLink}`} className="blog-title  leading-tight text-5xl font-bold  md:text-2xl no-underline ">{title}</Link>
    </div>
    </>
  );
};

export default blog;
