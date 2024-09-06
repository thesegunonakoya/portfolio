import React from "react";

const Experience = () => {
    return (
        <div className="flex flex-col justify-center text-sm md:mt-12">
            <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
                Professional Journey
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mx-[5vw] md:mx-[15vw] mt-12">

                <div className="relative border-l-2 border-[#E2EAFD] pl-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#E2EAFD] mb-2">
                        Software Developer at XYZ Corp
                    </h2>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#89A4AE] mb-2">
                        2021 - Present
                    </p>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#C7D4E4]">
                        At XYZ Corp, I contributed to full-stack development using React, Node.js, and MongoDB. I led multiple projects, ensuring the team adhered to deadlines while implementing best practices for web development.
                    </p>
                </div>

                <div className="relative border-l-2 border-[#E2EAFD] pl-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#E2EAFD] mb-2">
                        Frontend Developer at ABC Inc
                    </h2>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#89A4AE] mb-2">
                        2019 - 2021
                    </p>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#C7D4E4]">
                        As a frontend specialist, I created responsive and engaging interfaces, collaborating closely with designers and stakeholders to bring visually appealing experiences to life using HTML, CSS, and JavaScript.
                    </p>
                </div>

                <div className="relative border-l-2 border-[#E2EAFD] pl-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#E2EAFD] mb-2">
                        Intern at DEF Ltd
                    </h2>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#89A4AE] mb-2">
                        2018 - 2019
                    </p>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#C7D4E4]">
                        During my internship, I gained hands-on experience in PHP, WordPress, and MySQL. I contributed to building internal tools and web applications that enhanced team productivity.
                    </p>
                </div>

                <div className="relative border-l-2 border-[#E2EAFD] pl-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#E2EAFD] mb-2">
                        Freelance Web Developer
                    </h2>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#89A4AE] mb-2">
                        2017 - 2018
                    </p>
                    <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] text-[#C7D4E4]">
                        As a freelance developer, I collaborated with clients to create custom websites that catered to their unique needs, sharpening my skills in full-stack development and client communication.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Experience;
