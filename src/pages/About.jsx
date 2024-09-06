import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
            <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
                About Me
            </h1>
            
            <div className="text-left mx-[5vw] md:mx-[20vw] mt-5 space-y-5">
                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    Hello, gorgeous stranger! You probably already knew this, but I&apos;m a curiosity-led full-stack software developer, proficient in a range of <Link className="underline text-blue-400" to={"/skill"}>technologies</Link> including JavaScript, HTML, CSS, Tailwind, PHP, WordPress, Bootstrap, MySQL, and Git.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    For me, coding isn&apos;t just a job or hobby; it’s therapy, a creative outlet, and an escape. I find solace and fulfillment in exploring endless possibilities in the digital world.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    In 2019, I was already freestyling in web design, dropping hits back to back. Initially, I designed websites with WordPress and any <Link className="underline text-blue-400" to={"/skill"}>technologies</Link> I could get my hands on for campus events at my university.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    Before graduating with my mechanical engineering degree in 2021, I discovered my passion for web technologies and turned it into a profession.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    In 2022, I founded a business specializing in e-commerce websites and other types for small to medium-sized businesses, mastering WooCommerce, WordPress, and related <a className="underline text-blue-400" href="https://thesegunonakoya.me/technologies.html">technologies</a>.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    Fast forward to late 2023 and early 2024, I ventured into full-stack software development, facing challenges like debugging with enthusiasm. Each setback was a chance to grow.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    I’ve always been driven by a relentless pursuit of greatness, striving to push the boundaries of what’s possible. The journey has been remarkable, and I’m excited for the adventures ahead.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    In my free time, I enjoy working on side projects and fostering creativity. When I’m not coding, you can find me jamming to my Spotify playlist or tackling another Sudoku challenge.
                </h2>

                <h2 className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
                    I am excited about the future, and I appreciate you for taking the time to learn about my story. Feel free to <a className="underline text-blue-400" href="http://thesegunonakoya.me/contact.html">connect with me</a> on LinkedIn or check out my GitHub for some of my projects.
                </h2>
            </div>
        </div>
    );
}

export default About;
