import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";

import { getMarkdownBySlug } from "../../utils/markdown";
import { components } from "../../components/CustomTags";

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent;

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/df0aad0ku/image/upload/v1687111903/github%20assets/thumbnail_qb4uoj.png"
        />
      </Head>
      <div
        className=" text-gray-500 dark:text-gray-300 pt-5 block mx-auto md:max-w-full  prose-[iframe]:w-100 
        max-w-4xl dark:prose-invert
        prose-img:mx-auto   prose-img:my-6 prose-img:rounded-2xl  scrollbar-hide  
        prose-headings:text-primary dark:prose-headings:text-secondary 
         
         prose-a:no-underline prose-a:text-inherit

         prose-table:border-collapse prose-table:w-full prose-td:text-left prose-td:border-x-0 prose-td:border-y-[1px]  prose-td:border-solid prose-td:p-2

        prose-code:rounded prose-code:bg-purple-800 prose-code:font-bold prose-code:text-sm
        before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#080251] prose-pre:mt-5 
        prose-code:text-white prose-pre:rounded-[0_0_1rem_1rem] font-jetbrains 
           
        "
      >
        <h1 className="leading-tight font-extrabold  md:text-2xl no-underline my-8 md:mt-2">
          {frontmatter.title}
          <div className="text-sm font-thin pt-4">
            <div>
              {frontmatter.date} • {frontmatter.duration}
            </div>
            <div className=" mt-3 flex gap-3">
              {frontmatter.topic.split(" ").map((tag, index) => (
                <span
                  key={index}
                  className=" px-3 py-1 bg-slate-800 rounded-lg text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </h1>
        <hr className=" opacity-30 mb-10" />
        <MDXRemote {...serializedContent} components={components} />
      </div>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(path.join("content/posts")));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split(".")[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const serializedContent = await getMarkdownBySlug(`posts/${params.slug}`);

  return {
    props: {
      serializedContent,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
