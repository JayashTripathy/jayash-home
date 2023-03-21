import React from "react";
import Link  from "next/link";

const blog = () => {
  return (
    <>
    <div>

      <div className="text-lg text-gray-600 font-medium">
        23 Feb 2023 <span className="blog-tags font-bold">#coding</span>
      </div>
      <Link  href="https://www.google.com/" className="blog-title text-5xl font-bold">🌑 next.js dark mode</Link>
    </div>
    </>
  );
};

export default blog;
