import React from "react";
import { TfiEmail } from "react-icons/tfi";

function connect() {
  return (
    <div className="mx-auto max-w-[45%] min-h-[25rem] my-16 md:max-w-[85%]">
      <h1>👋 say hi </h1>
      <p className="pt-8">
        I enjoy connecting with other developers, drop me a message and let's
        talk!
        <br />
        <br />
        Social media is great for informal chats.
        <br /> Email works best for in depth discussions.
      </p>

      <div className="pt-8 text-lg md:text-base">
        <div className="connect-link flex items-center gap-3   m">
          <img src="/icons/mail.png" alt="sds" className="md:w-8" />
          <a
            href="https://mail.google.com/mail/u/4/?hl=en_GB#inbox?compose=GTvVlcSBnNSphhkSxSgtpfMfthRSHfBdBrkvKDLBZbRsDDxnNRgkKPdklDBpBncndbFCFhNZcFXnG"
            className="font-bold  p-redirect"
            target="_blank"

          >
            contact.jayash@gmail.com
          </a>
        </div>
        <div className="connect-link flex items-center gap-3 ">
          <img src="/icons/twitter.png" alt="sds" className="md:w-8"/>
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
