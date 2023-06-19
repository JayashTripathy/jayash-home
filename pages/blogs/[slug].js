import React, { useEffect, useRef } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent;

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:image" content="https://res.cloudinary.com/df0aad0ku/image/upload/v1687111903/github%20assets/thumbnail_qb4uoj.png" />
      </Head>
      <div
        className=" block mx-auto md:max-w-[95%]  prose prose-[iframe]:w-100 
         prose-purple max-w-3xl dark:prose-invert prose-a:no-underline 
         prose-a:shadow-link prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover  prose-code:rounded
         prose-code:bg-purple-900 prose-code:px-1 prose-code:py-[2px] prose-code:font-normal 
          before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#080251] 
         prose-img:mx-auto prose-img:rounded-2xl  prose-p:text-md 
           overflow-hidden scrollbar-hide prose-code:text-white prose-pre:rounded-[0_0_1rem_1rem] 
         prose-pre:mt-5 prose-img:border-2  prose-img:my-5 prose-p:my-1 prose-h2:mt-3 prose-h1:md:mt-3 
         prose-code:text-xs prose-a:font-semibold prose-a:text-highlighting dark:prose-a:text-highlighting
         md:prose-p:leading-6  prose-p:font-manrope prose-li:font-manrope prose-ul:font-manrope prose-h1:font-manrope prose-h2:font-manrope 
        "
      >
        <h1 className="mt-14 mb-6 font-manrope">{frontmatter.title}</h1>
        <MDXRemote {...serializedContent} />
      </div>
      {/* <div>{...serializedContent}</div> */}
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(path.join("posts")));

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
  const markdown = fs.readFileSync(
    path.join("posts", `${params.slug}.mdx`),
    "utf-8"
  );
  const serializedContent = await serialize(markdown, {
    format: "mdx",
    parseFrontmatter: true,
    scope: "", // ewe can supply variables via this
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  });

  return {
    props: {
      serializedContent,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
