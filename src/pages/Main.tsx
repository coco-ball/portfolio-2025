import React from "react";

function Main() {
  return (
    <div className="h-screen overflow-scroll text-black pt-[4.5rem] px-10 text-4xl md:text-5xl">
      <p className="leading-[1.2] md:leading-[1.2]">
        Chaewon Yu is a product designer who brings ideas to life through
        thoughtful interaction, development collaboration, and a deep care for
        user needs.
        <br />
        I'm studying Visual Communication Design and Information Science and
        Culture at Seoul National University. I'm currently designing digital
        experiences at LogiSpot, and I previously worked at Vive Studios.
      </p>
      <div className="flex gap-6 mt-16 mb-40">
        <a
          href="mailto:kidbean02@snu.ac.kr"
          className="border-4 rounded-full border-black flex justify-center items-center w-16 h-16"
        >
          <img src="/images/mail.png" className="w-11 h-11" />
        </a>
        <a
          href="https://www.linkedin.com/in/chaewonyu"
          className="border-4 rounded-full border-black flex justify-center items-center w-16 h-16 pl-[0.2rem]"
        >
          in
        </a>
      </div>
    </div>
  );
}

export default Main;
