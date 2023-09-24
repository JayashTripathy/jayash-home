import React from "react";
import { getMarkdownBySlug } from "../utils/markdown";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../components/CustomTags";

export default function resume({ mdx }) {
  console.log(mdx);
  return (
    <div
      className=" text-gray-500 dark:text-gray-300 pt-5 font-nunito block mx-auto md:max-w-full  prose-[iframe]:w-100 
        max-w-3xl dark:prose-invert
        prose-img:mx-auto prose-img:rounded-2xl  scrollbar-hide  
        prose-headings:text-primary dark:prose-headings:text-secondary 
         
        prose-a:no-underline prose-a:text-inherit 

        prose-table:border-collapse prose-table:w-full prose-td:text-left prose-td:border-x-0 prose-td:border-y-[1px]  prose-td:border-solid prose-td:p-2

        prose-code:rounded prose-code:bg-slate-800 prose-code:text-sm prose-code:px-[5px] prose-code:py-0 prose-code:font-normal 
        before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#080251] prose-pre:mt-5 
        prose-code:text-white prose-pre:rounded-[0_0_1rem_1re m] prose-code:text-md md:prose-code:text-sm
           
        "
    >
      <MDXRemote {...mdx} components={components} />
    </div>
  );
}

const getStaticProps = async () => {
  const mdx = await getMarkdownBySlug("pages/resume");

  return {
    props: {
      mdx,
    },
  };
};
export { getStaticProps };
