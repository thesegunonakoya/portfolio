import React from "react";

const Experience = () => {
    return (
        <>
        <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12">
        
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold md:font-semibold text-[#E2EAFD] animate-fadeInUp">
          Experience
        </h1>
        
        <div className="mt-8 mx-[5vw] md:mx-[20vw] space-y-12">

        <div className="text-left animate-fadeInUp delay-100">
            <h2 className="text-lg font-bold text-white">Software Developer at XYZ Corp (2021 - Present)</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">
              At XYZ Corp, I have been involved in developing and maintaining web applications using React, Node.js, and MongoDB. I have led several projects, ensuring timely delivery and adherence to best practices.
            </p>
        </div>

        <div className="text-left animate-fadeInUp delay-200">
            <h2 className="text-lg font-bold text-white">Frontend Developer at ABC Inc (2019 - 2021)</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Specialized in creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Collaborated closely with the design team to implement their vision.
            </p>
        </div>

        <div className="text-left animate-fadeInUp delay-300">
            <h2 className="text-lg font-bold text-white">Intern at DEF Ltd (2018 - 2019)</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Gained hands-on experience in web development, working on PHP, WordPress, and MySQL. Contributed to the development of internal tools that enhanced productivity.
            </p>
        </div>

        <div className="text-left animate-fadeInUp delay-400">
            <h2 className="text-lg font-bold text-white">Freelance Web Developer (2017 - 2018)</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Worked with various clients to create custom websites tailored to their needs, focusing on full-stack development and project management.
            </p>
        </div>

        </div>
        </div>
        </>
    );
}

export default Experience;
