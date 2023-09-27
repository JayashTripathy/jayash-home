import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex bg-gray-400/20 p-6 rounded-xl shadow-2xl flex-col max-w-md">
      <div>
        Jayash in his tenure as React Developer Intern at Writeroo built various
        components of demanding complexity crucial to the platform and it's
        ecosystem. His work has been excellent and production ready. He has a
        clear understanding of the requirements and is quick to adapt to new
        technologies and practices.
      </div>
      <hr className="w-full opacity-20 my-3" />

      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold">{testimonial.name}</div>
          <div className="italic text-sm opacity-80">{testimonial.title}</div>
        </div>
        <img
          className="w-12 rounded-xl"
          src="https://res.cloudinary.com/df0aad0ku/image/upload/v1695793089/blogs/pages/shivank_writeroo_e0oevg.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
