import React from "react";
import Blog from "../../components/Blog.jsx";

const blogs = ({ posts }) => {
  return (
    <>
      <div className="max-w-[50%] mx-auto md:max-w-full block  ">
        <input
          className="mb-8 mt-8 w-[100%] rounded-2xl border-3 outline-none border-primary border-solid border-4 py-4 px-8 text-xl shadow-box placeholder:text-gray-400 focus:border-purple-500 focus:border-[4px] focus:outline-none  text-secondary    md:my-4 "
          type="text"
          placeholder="search blog"
        ></input>

        {/* all blog posts  */}

        <div className="my-6 flex  flex-col items-start gap-12 scrollbar-hide md:gap-6 ">
          {posts.map((post, index) => {
            return (
              <Blog
                date={post.frontMatter.date}
                title={post.frontMatter.title}
                topic={post.frontMatter.topic}
                blogLink={post.slug}
              />
            );
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

  const files = fs.readdirSync(path.join("content/posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/posts", filename),
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

export default blogs;
