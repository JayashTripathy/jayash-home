import React from "react";
import Blog from "../components/Blogs";

const blogs = ({ posts }) => {
  return (
    <>
      {console.log(posts[0].frontMatter)}
      <div className="w-[50%] mx-auto">
        <input
          className="mb-8 mt-8 w-[100%] rounded-full border-3 outline-none border-primary border-solid border-2 py-4 px-8 text-xl shadow-box placeholder:text-gray-400 focus:border-purple-500 focus:border-[3px] focus:outline-none shadow-dark-bottom"
          type="text"
          placeholder="search blog"
        ></input>
        <div className="my-6 flex  flex-col items-start gap-12 overflow-y-auto scrollbar-hide  ">
          {posts.map((post, index) => {
            return <Blog date={post.frontMatter.date} />;
          })}
        </div>
      </div>
    </>
  );
};

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

    const { data } = matter(markdownWithMeta);

    return {
      frontMatter: data,
    };
  });

  return {
    props: { posts },
  };
};

export default blogs;
