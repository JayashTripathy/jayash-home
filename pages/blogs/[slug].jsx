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
        className=" text-gray-500 dark:text-gray-300 pt-5 font-nunito block mx-auto md:max-w-full  prose-[iframe]:w-100 
        max-w-3xl dark:prose-invert
        prose-img:mx-auto prose-img:my-3 prose-img:rounded-2xl  scrollbar-hide  
        prose-headings:text-primary dark:prose-headings:text-secondary 
         
         prose-a:no-underline prose-a:text-inherit

         prose-table:border-collapse prose-table:w-full prose-td:text-left prose-td:border-x-0 prose-td:border-y-[1px]  prose-td:border-solid prose-td:p-2

        prose-code:rounded prose-code:bg-slate-800 prose-code:text-sm prose-code:px-[5px] prose-code:py-0 prose-code:font-normal 
        before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#080251] prose-pre:mt-5 
        prose-code:text-white prose-pre:rounded-[0_0_1rem_1rem] prose-code:text-md md:prose-code:text-sm
           
        "
      >
        <h1 className="leading-tight font-extrabold  md:text-2xl no-underline my-8 md:mt-2">
          {frontmatter.title}
          <div className="text-xs font-thin">{frontmatter.date}</div>
        </h1>
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
