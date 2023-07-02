import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import remarkParse from "remark-parse";
import fs from "fs";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import rehypeExternalLinks from "rehype-external-links";

export const getMarkdownBySlug = async (slug) => {
  const markdown = fs.readFileSync(
    path.join("content/", `${slug}.mdx`),
    "utf-8"
  );

  const serializedContent = await serialize(markdown, {
    parseFrontmatter: true,
    scope: "", // we can supply variables via this
    mdxOptions: {
      remarkPlugins: [remarkParse, remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        rehypeSlug,
        [rehypeExternalLinks, { target: "_blank", rel: ["noopener"] }],
      ],
      format: "mdx",
    },
  });
  return serializedContent;
};
