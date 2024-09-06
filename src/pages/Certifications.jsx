import React from "react";

const Certifications = () => {
  const certifications = [
    { title: "Certified React Developer", issuer: "React Training", date: "June 2021", link: "#" },
    { title: "Full Stack Web Developer", issuer: "Coursera", date: "April 2020", link: "#" },
    { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "December 2019", link: "#" },
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "August 2018", link: "#" },
  ];

  return (
    <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp">
      
      <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
        Certifications 📜
      </h1>

      <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
        Here are some of the certifications I have earned over the years.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-[5vw] md:mx-[20vw]">
        {certifications.map((certification, index) => (
          <div key={index} className="text-left">
            <h2 className="text-[1.1rem] md:text-lg font-semibold text-[#E2EAFD]">
              {certification.title}
            </h2>
            <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
              Issued by: {certification.issuer}
            </p>
            <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
              Date: {certification.date}
            </p>
            <a href={certification.link} className="mt-2 inline-block text-[#1DA1F2] hover:underline">
              View Certificate
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Certifications;