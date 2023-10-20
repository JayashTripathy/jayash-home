import React from "react";
import { getMarkdownBySlug } from "../../utils/markdown";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../components/CustomTags";
import path from "path";
import fs from "fs";
import { useRouter } from "next/router";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Now({ mdx, sortedNows }) {
  const router = useRouter();

  const { frontmatter } = mdx;
  const currentNow = router.query.slug;
  const prevNow =
    sortedNows[
      sortedNows.findIndex((now) => now.split(".")[0] === currentNow) + 1
    ]?.split(".")[0];
  const nextNow =
    sortedNows[
      sortedNows.findIndex((now) => now.split(".")[0] === currentNow) - 1
    ]?.split(".")[0];

  return (
    <>
      <div
        className=" text-gray-500 dark:text-gray-300 pt-5 nunito block mx-auto md:max-w-full  prose-[iframe]:w-100 
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
        <div className="text-6xl font-extrabold text-primary dark:text-secondary ">
          {frontmatter.title}
        </div>
        <p className="text-gray-400/60">{frontmatter.date}</p>
        <MDXRemote {...mdx} components={components} />

        <div className="flex justify-between mt-10 gap-5">
          {prevNow && (
            <Link
              href={`${prevNow}`}
              className=" bg-gray-500/30 p-5 w-full rounded-xl flex gap-3 justify-center items-center hover:bg-gray-500/50 cursor-pointer transition-all duration-200 "
            >
              <HiArrowNarrowLeft className="text-3xl" />{" "}
              <div>
                Previous
                <div className="text-xs font-bold text-gray-500">{prevNow}</div>
              </div>
            </Link>
          )}
          {nextNow && (
            <Link
              href={`${nextNow}`}
              className=" bg-gray-500/30 p-5 w-full rounded-xl flex gap-3 justify-center items-center hover:bg-gray-500/50 cursor-pointer transition-all duration-200 "
            >
              <div className=" text-right ">
                Next
                <div className="text-xs font-bold text-gray-500">{nextNow}</div>
              </div>
              <HiArrowNarrowRight className="text-3xl" />
            </Link>
          )}
        </div>
      </div>
      <p className=" text-center py-4 italic">
        Inspired by{" "}
        <Link
          href={"https://sive.rs/nowff"}
          className=" underline underline-offset-4 "
        >
          Derek Sivers.
        </Link>{" "}
      </p>
    </>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(path.join("content/pages/now")));

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
  const mdx = await getMarkdownBySlug(`pages/now/${params.slug}`);

  const files = path.join("content/pages/now");

  const allNows = fs.readdirSync(files);

  const sortedNows = allNows.sort((a, b) => {
    const dateA = new Date(a.split(".")[0]);
    const dateB = new Date(b.split(".")[0]);

    return dateB - dateA;
  });

  return {
    props: {
      mdx,
      sortedNows,
    },
  };
};
export { getStaticProps, getStaticPaths };
