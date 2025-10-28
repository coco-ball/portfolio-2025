import React from "react";

function Main() {
  return (
    <div className="h-screen overflow-scroll text-black pt-[4.5rem] px-10 text-4xl md:text-5xl">
      <p className="leading-[1.2] md:leading-[1.2]">
        Hi, Chaewon Yu is a product designer who brings ideas to life through{" "}
        <span className="text-xs font-bold mr-[2px] align-top relative top-[3px] md:text-sm">
          1
        </span>
        thoughtful interaction,{" "}
        <span className="text-xs font-bold align-top relative top-[3px] md:text-sm">
          2
        </span>
        development collaboration, and{" "}
        <span className="text-xs font-bold align-top relative top-[3px] md:text-sm">
          3
        </span>
        a deep care for user needs.
        <br />
        I'm studying Visual Communication Design and Information Science and
        Culture at Seoul National University. I'm currently designing digital
        experiences at LogiSpot, and I previously worked at Vive Studios.
      </p>
      <div className="flex gap-6 mt-16">
        <a
          href="mailto:kidbean02@snu.ac.kr"
          className="border-4 rounded-full border-black flex justify-center items-center w-16 h-16 hover:scale-105 hover:cursor-pointer transition-all duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/mail.png" className="w-11 h-11" />
        </a>
        <a
          href="https://www.linkedin.com/in/chaewonyu"
          className="border-4 rounded-full border-black flex justify-center items-center pl-[0.1rem] pb-[0.05rem] w-16 h-16 hover:scale-105 hover:cursor-pointer transition-all duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/LinkedIn.png" className="w-9 h-9" />
        </a>
      </div>
    </div>
  );
}

export default Main;
