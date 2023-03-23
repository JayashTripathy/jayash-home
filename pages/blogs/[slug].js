import React from 'react'
import fs from 'fs'
import path from "path"
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter';




const PostPage = ({ serializedContent  })  => {

  console.log({...serializedContent})
  return (
    <>
    <MDXRemote {...serializedContent} components={SyntaxHighlighter} />
    {/* <div>{...serializedContent}</div> */}
    </>
  )
}


const getStaticPaths = async () => {

  
  const files = fs.readdirSync(path.join(path.join('posts')))


  const paths = files.map((filename) => ({
    params: {
      slug: filename.split('.')[0],
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params }) => {
 const markdown = fs.readFileSync(path.join('posts', `${params.slug}.mdx`), 'utf-8')
 const serializedContent = await serialize(markdown, {
    format: "mdx",
    parseFrontmatter:true,
    scope: '',  // ewe can supply variables via this
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return {
    props: {
      serializedContent,
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage