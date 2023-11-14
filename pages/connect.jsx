import React from "react";
import { AiFillMail } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

function connect() {
    return (
        <div className="mx-auto max-w-[45%] min-h-[25rem] my-16 md:max-w-[85%]">
            <h1>👋 say hi </h1>
            <p className="pt-8">
                I enjoy connecting with other developers, drop me a message and
                let's talk!
                <br />
                <br />
                Social media is great for informal chats.
                <br /> Email works best for in depth discussions.
            </p>

            <div className="pt-8 text-lg md:text-base">
                <div className="connect-link flex items-center gap-3   m">
                    <AiFillMail size={30} />
                    <a
                        href="mailto:jayashtripathy371@gmail.com"
                        className="font-bold  p-redirect"
                        target="_blank"
                    >
                        jayashtripathy371@gmail.com
                    </a>
                </div>
                <br />
                <div className="connect-link flex items-center gap-3 ">
                    <RiTwitterXLine size={30} />
                    <a
                        href="https://twitter.com/jayash_tripathy"
                        className="font-bold  p-redirect"
                        target="_blank"
                    >
                        jayash_tripathy
                    </a>
                </div>
            </div>
        </div>
    );
}

export default connect;
