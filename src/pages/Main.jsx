import React from "react";
import { Link } from "react-router-dom";
import avi from "../assets/img/avi-toon.jpg";
import topRight from "../assets/svg/top-right.svg";
import "../index.css";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-grow text-center md:mt-0 mb-5 animate-fadeInUp">
      <div className="flip-container w-40 h-40 md:w-48 md:h-48">
        <div className="flip-card w-full h-full">
          <img
            src={avi}
            alt="Oluwasegun Onakoya"
            className="frontImg w-40 h-40 md:w-44 md:h-44 p-2 rounded-full relative"
            style={{ borderColor: "#eadabe", borderWidth: "1px", filter: "brightness(80%)" }}
          />
          <img
            src={avi}
            alt="Oluwasegun Onakoya"
            className="backImg w-40 h-40 md:w-44 md:h-44 p-2 rounded-full relative"
            style={{ borderColor: "#eadabe", borderWidth: "1px", filter: "brightness(80%)" }}
          />
        </div>
      </div>

      <h1 className="mt-2 md:mt-3 mx-5 md:mx-0 text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold md:font-semibold text-[#E2EAFD]">
        Oluwasegun<span className="hidden md:inline"> </span>
        <br className="inline md:hidden" />
        Onakoya{" "}
        <span className="inline-block">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            color="#eadabe"
            style={{
              color: "#eadabe",
              verticalAlign: "middle",
              display: "inline-block",
            }}
            height="17"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </span>
      </h1>

      <h2
        style={{ color: "rgb(137, 148, 174)" }}
        className="mx-[13vw] md:mx-[32vw] mt-2 md:mt-3 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
        I&apos;m a curiosity-driven software developer, with a soft spot for the backend, a growing obsession with automation, increasingly AI-fluent. always building, always tweaking and usually learning something in the process. still figuring it out. still showing up.
      </h2>
      <div className="md:flex items-center grid-row-1 md:gap-5">
        <div>
          <a
            href="https://drive.google.com/file/d/1AyO0raOUV0gPgaSc-GUNgt3pB7yszywH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-2 mt-5 px-5 pt-4 pb-5 font-semibold md:font-medium text-[0.85rem] bg-[#000] text-[#eadabe] hover:text-[#eadabe] md:text-sm border-[1px] border-[#20242d] hover:border-[#eadabe]/50 transition duration-[3s] ease-in-out">
              Download Resume{" "}
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                src={topRight}
                alt="download"
              />
            </button>
          </a>
        </div>
        <div className="hidden md:block">
          <Link
            to={"/contact"}
            className="flex gap-2 mt-5 px-5 pt-4 pb-5 font-semibold md:font-medium text-xs md:text-sm bg-transparent text-[#8994AE] hover:text-[#eadabe] transition duration-[2s] ease-in-out"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="fixed bottom-5 right-8 mb-2 mr-2 md:mb-5 md:mr-5 text-xs md:text-[10px] font-medium text-[#E2EAFD] z-[100] hidden md:block text-right">
        <a
          href="https://thesegunonakoya.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with code, caffeine,
          <br />
          and a healthy dose of
          <br />
          imposter syndrome
        </a>
      </div>
    </main>
  );
};

export default Main;
