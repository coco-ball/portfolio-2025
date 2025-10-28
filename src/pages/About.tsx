import React from "react";

function About() {
  return (
    <div className="h-screen overflow-scroll text-black pt-[4.5rem] px-10 text-xl md:text-2xl">
      <p className="leading-[1.2] md:leading-[1.2]">
        Hey there! I’m Chaewon Yu, a product designer who loves{" "}
        <span className="text-xs font-bold mr-[2px] align-top md:text-sm">
          1
        </span>
        turning ideas into delightful, working products—and{" "}
        <span className="text-xs font-bold mr-[2px] align-top md:text-sm">
          2
        </span>
        Brachiosauruses🦕!
        <br />
        <br />
        I’m currently studying Visual Communication Design and Information
        Science and Culture at Seoul National University. Also, I’m working at
        LogiSpot, where I design digital logistics systems that support
        integrated operations.
        <br />
        Previously, I worked at Vive Studios, where I designed UI components and
        responsive designs for AI products and the SaaS platform VIT, with my
        work applied directly to the final product.
        <br />
        <br />
        I’ve taught myself web development and collaborated with developers on
        real-world products, which helped me build a solid understanding of how
        things get built—and how to communicate effectively across disciplines.
        <br />
        <br />
        One of my favorite hobbies is creating interactive websites that offer
        aesthetically rich and dynamic experiences.
        <br />
        Over the past two years, I’ve built several personal projects and
        participated in interactive web studies, always exploring how to craft
        interfaces that feel both intuitive and unexpectedly delightful.
      </p>
      <div className="flex gap-6 mt-16 mb-40">
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
          className="border-4 rounded-full border-black flex justify-center items-center w-16 h-16 pl-[0.1rem] hover:scale-105 hover:cursor-pointer transition-all duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/LinkedIn.png" className="w-7 h-7" />
        </a>
        <a
          href="https://cwyu.kr/"
          className=" flex justify-center items-center h-16 pl-[0.1rem] ml-4 hover:scale-105 hover:cursor-pointer transition-all duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Even More Works</span>
          <span className="text-[2.75rem] pl-1">🪺</span>
        </a>
      </div>
    </div>
  );
}

export default About;
