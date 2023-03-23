import React from 'react'
import fs from 'fs'
import path from "path"
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter';




const PostPage = ({ serializedContent  })  => {

  const { frontmatter } = serializedContent;

  console.log({...serializedContent})
  return (
    <>
    <div className='max-w-[60%] block mx-auto md:max-w-[85%] leading-7'>
      <h1 className='mt-14 mb-6'>{frontmatter.title}</h1>
    <MDXRemote {...serializedContent} components={{SyntaxHighlighter}} />
    </div>
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