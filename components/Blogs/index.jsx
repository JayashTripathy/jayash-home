import React from "react";


const blog = ({title, slug, date, topic }) => {
  return (
    <>
    <div>

      <div className="text-base text-gray-600 font-medium py-2">
        {date} <span className="blog-tags font-semibold">#coding</span>
      </div>
      <Link  href="https://www.google.com/" className="blog-title text-5xl font-bold">🌑 next.js dark mode</Link>
    </div>
    </>
  );
};

export default blog;
