import React, { useEffect, useRef } from "react";

import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent;
  const shouldRan = useRef(true);
  // useEffect(() => {
  //   const pre = document.querySelectorAll(".rehype-code-title");

  //   const isPrismClass = (preTag) => {
  //     return preTag.className.substring(0, 6) === "rehype";
  //   };

  //   function copyTextToClipboard(text) {
  //     if (!navigator.clipboard) {
  //       fallbackCopyTextToClipboard(text);
  //       return;
  //     }
  //     navigator.clipboard.writeText(text).then(
  //       function () {
  //         console.log("Async: Copying to clipboard was successful!");
  //       },
  //       function (err) {
  //         console.error("Async: Could not copy text: ", err);
  //       }
  //     );
  //   }

  //   // copy button for code

    
  //   if (pre !== null) {
  //     for (let i = 0; i < pre.length; i++) {
  //       let copyDiv = document.createElement("div");
  //       let getCopyDiv = document.getElementById("copyCode");
  //       copyDiv.classList.add("copy");
  //       copyDiv.id = "copyCode";
  //       copyDiv.innerHTML = "copy";
  //       if (isPrismClass(pre[i]) && shouldRan.current) {
  //         pre[i].appendChild(copyDiv);
  //       }

  //     }
  //       shouldRan.current = false;
  //   }
  // }, []);

  return (
    <>
      <div
        className="block mx-auto md:max-w-[95%] leading-7 prose prose-[iframe]:w-100 
         prose-purple max-w-3xl dark:prose-invert prose-a:font-normal prose-a:text-gray-700 prose-a:no-underline 
         prose-a:shadow-link prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover  prose-code:rounded
         prose-code:bg-[#080251] prose-code:px-2 prose-code:py-1 prose-code:font-normal 
          before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#080251] 
         prose-img:mx-auto prose-img:rounded dark:prose-a:text-gray-300 prose-p:text-md 
         dark:prose-code:bg-[#000000] dark:prose-pre:bg-[#000000] overflow-hidden scrollbar-hide prose-code:text-[#fad400] prose-pre:rounded-[0_0_1rem_1rem] 
         prose-pre:mt-5"
      >
        <h1 className="mt-14 mb-6">{frontmatter.title}</h1>
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
