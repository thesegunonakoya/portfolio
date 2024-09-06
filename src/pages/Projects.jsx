import React from "react";

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", description: "A personal website to showcase my skills, projects, and resume.", link: "#" },
    { name: "E-commerce Platform", description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.", link: "#" },
    { name: "Blog CMS", description: "A content management system for creating and managing blog posts with rich text editing and media uploads.", link: "#" },
    { name: "Chat Application", description: "A real-time chat application with WebSocket integration for instant messaging.", link: "#" },
    { name: "Task Manager", description: "A task management tool to organize and prioritize tasks with deadlines and reminders.", link: "#" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
        
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
          Projects 🚀
        </h1>

        <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
          A showcase of the projects I&apos;ve worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-[5vw] md:mx-[20vw]">
          {projects.map((project, index) => (
            <div key={index} className="text-left">
              <h2 className="text-[1.1rem] md:text-lg font-semibold text-[#E2EAFD]">
                {project.name}
              </h2>
              <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
                {project.description}
              </p>
              <a href={project.link} className="mt-2 inline-block text-[#1DA1F2] hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Projects;