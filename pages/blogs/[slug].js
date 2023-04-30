import React from "react";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent;

  return (
    <>
        <div className=" block mx-auto md:max-w-[85%] leading-7 prose prose-[iframe]:w-100  prose-purple max-w-3xl dark:prose-invert prose-a:font-normal prose-a:text-gray-700 prose-a:no-underline prose-a:shadow-link prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover prose-code:rounded prose-code:bg-[#2d2b55] prose-code:px-2 prose-code:py-1 prose-code:font-normal prose-code:text-[#fad000] before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#2D2B55] prose-img:mx-auto prose-img:rounded dark:prose-a:text-gray-300">
        <h1 className="mt-14 mb-6">{frontmatter.title}</h1>
        <MDXRemote {...serializedContent} components={{ SyntaxHighlighter }} />
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
      rehypePlugins: [],
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
