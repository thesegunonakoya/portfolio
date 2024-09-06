import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer at XYZ Corp",
      duration: "2021 - Present",
      description: "At XYZ Corp, I contributed to full-stack development using React, Node.js, and MongoDB. I led multiple projects, ensuring the team adhered to deadlines while implementing best practices for web development.",
      link: "#"
    },
    {
      title: "Frontend Developer at ABC Inc",
      duration: "2019 - 2021",
      description: "As a frontend specialist, I created responsive and engaging interfaces, collaborating closely with designers and stakeholders to bring visually appealing experiences to life using HTML, CSS, and JavaScript.",
      link: "#"
    },
    {
      title: "Intern at DEF Ltd",
      duration: "2018 - 2019",
      description: "During my internship, I gained hands-on experience in PHP, WordPress, and MySQL. I contributed to building internal tools and web applications that enhanced team productivity.",
      link: "#"
    },
    {
      title: "Freelance Web Developer",
      duration: "2017 - 2018",
      description: "As a freelance developer, I collaborated with clients to create custom websites that catered to their unique needs, sharpening my skills in full-stack development and client communication.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col justify-start text-sm md:mt-12 animate-fadeInUp mb-16">
      <h1 className="text-left mt-2 mx-[5vw] md:mx-[15vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
        Experience 🛣️
      </h1>
      
      <p className="text-left mx-[5vw] md:mx-[15vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
        Here are some of the roles I&apos;ve held over the years.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12 px-[5vw] md:px-[15vw]">
        {experiences.map((experience, index) => (
          <div key={index} className="text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#E2EAFD] mb-2">
              {experience.title}
            </h2>
            <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#89A4AE] mb-2">
              {experience.duration}
            </p>
            <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#C7D4E4]">
              {experience.description}
            </p>
            <a href={experience.link} className="mt-2 inline-block text-[#1DA1F2] hover:underline">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;