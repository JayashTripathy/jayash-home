import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import fs from "fs";
import remarkGfm from "remark-gfm";

import rehypeExternalLinks from "rehype-external-links";

export const getMarkdownBySlug = async (slug) => {
  const markdown = fs.readFileSync(
    path.join("content/", `${slug}.mdx`),
    "utf-8"
  );

  const serializedContent = await serialize(markdown, {
    format: "mdx",
    parseFrontmatter: true,
    scope: "", // we can supply variables via this
    mdxOptions: {
      remarkPlugins: [remarkParse, remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        [rehypeExternalLinks, { target: "_blank", rel: ["noopener"] }],
      ],
    },
  });

  return serializedContent;
};
