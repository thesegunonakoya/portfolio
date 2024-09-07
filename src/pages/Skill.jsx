import React from "react";

const TechStacks = () => {
  const techSkills = [
    { name: "JavaScript", description: "The language I breathe. From building dynamic UIs to handling APIs, JS is my go-to." },
    { name: "React", description: "The front-end library that powers my projects, making UI building fast and efficient." },
    { name: "TypeScript", description: "Enhances my JS with static typing, ensuring cleaner, more predictable code." },
    { name: "Node.js", description: "For server-side JavaScript development." },
    { name: "APIs", description: "Building and integrating APIs to enable communication between different software systems." },
    { name: "Git", description: "Version control system, because every line of code deserves to be tracked." },
    { name: "Responsive Design", description: "Ability to create web applications that work on various devices and screen sizes." },
    { name: "Tailwind CSS", description: "Utility-first CSS framework, perfect for building modern, responsive designs with ease." },
    { name: "MongoDB", description: "Non-relational database for handling data with flexibility and speed." },
    { name: "MySQL & PostgreSQL", description: "Relational databases for structured data and secure queries." },
    { name: "PHP", description: "Backend logic for dynamic web apps and CMS like WordPress." },
    { name: "WordPress", description: "CMS platform for building scalable websites and e-commerce solutions." },
];

  return (
    <>
      <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
        
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
          Tech Stacks 💻
        </h1>

        <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
          A quick snapshot of the tools I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-[5vw] md:mx-[20vw]">
          {techSkills.map((skill, index) => (
            <div key={index} className="text-left">
              <h2 className="text-[1.1rem] md:text-lg font-semibold text-[#E2EAFD]">
                {skill.name}
              </h2>
              <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default TechStacks;
