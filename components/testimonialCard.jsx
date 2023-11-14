import { test } from "gray-matter";
import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex bg-gray-400/20 p-6 rounded-xl shadow-2xl flex-col max-w-md">
      <div>{testimonial.description}</div>
      <hr className="w-full opacity-20 my-3" />

      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold">{testimonial.name}</div>
          <div className="italic text-sm opacity-80">{testimonial.title}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
