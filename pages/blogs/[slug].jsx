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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/df0aad0ku/image/upload/v1687111903/github%20assets/thumbnail_qb4uoj.png"
        />
      </Head>
      <div
        className=" block mx-auto md:max-w-full  prose-lg md:prose-md prose-[iframe]:w-100 prose-p:leading-7
         prose-purple max-w-3xl dark:prose-invert prose-a:no-underline 
         prose-a:shadow-link prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover  prose-code:rounded
         prose-code:bg-slate-800 prose-code:text-sm prose-code:px-[5px] prose-code:py-0 prose-code:font-normal 
          before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#080251] 
         prose-img:mx-auto prose-img:rounded-2xl  prose-p:text-md
           overflow-hidden scrollbar-hide prose-code:text-white prose-pre:rounded-[0_0_1rem_1re
            m] 
         prose-pre:mt-5 prose-img:border-2  prose-img:my-5 prose-p:my-1 prose-h2:mt-3 prose-h1:md:mt-3 
         prose-code:text-md md:prose-code:text-sm prose-a:font-semibold prose-a:text-highlighting dark:prose-a:text-highlighting
           prose-p:font-nunito prose-li:font-nunito prose-ul:font-nunito prose-h1:font-nunito prose-h2:font-nunito
        "
      >
        <div className="leading-tight text-3xl font-extrabold  md:text-2xl no-underline my-8 md:mt-2">
          {frontmatter.title}
          <div className="text-xs font-thin">{frontmatter.date}</div>
        </div>
        <MDXRemote {...serializedContent} />
      </div>
      {/* <div>{...serializedContent}</div> */}
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
  const markdown = fs.readFileSync(
    path.join("content/posts", `${params.slug}.mdx`),
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
