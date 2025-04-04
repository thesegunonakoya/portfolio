import React from "react";

const Projects = () => {
  const projects = [
    { name: "This Website", description: "a portfolio, yes, but i wouldn&apos;t blame you for thinking something else.", link: "https://thesegunonakoya.me" },
    { name: "Speedxy", description: "an internet speed testing tool i trust because i built it myself.", link: "https://speedxy.syho.site/" },
    { name: "Spotify Currently Playing", description: "a serverless integration on my portfolio that utilizes the Spotify API to retrieve real-time data about my currently playing song on Spotify.", link: "https://github.com/thesegunonakoya/spotify-currently-playing" },
    // { name: "Chat Application", description: "A real-time chat application with WebSocket integration for instant messaging.", link: "#" },
    // { name: "Task Manager", description: "A task management tool to organize and prioritize tasks with deadlines and reminders.", link: "#" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16 mx-3 md:mx-0">
        
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
              <a href={project.link} className="mt-2 inline-block text-[#eadabe] hover:underline">
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