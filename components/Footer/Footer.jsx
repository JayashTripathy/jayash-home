import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex mx-auto max-w-[50%] flex-nowrap gap-3 justify-center m-5 mt-20">
      <Link href="https://github.com/JayashTripathy" target="_blank">
        <FiGithub  size="45" />
      </Link>
      <Link href="https://www.linkedin.com/in/jayash-tripathy/" target="_blank">
        <GrLinkedinOption  size="45" />
      </Link>
      <Link href="https://twitter.com/jayash_tripathy">
        <BsTwitter size="45" target="_blank" />
      </Link>
      {/* <Link href="www.google.com">

      <BsDiscord color="white" size="45" target="_blank" />
      </Link> */}
    </div>
  );
}

export default Footer;
