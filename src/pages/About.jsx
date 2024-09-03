import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
        <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12">
        
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold md:font-semibold text-[#E2EAFD]">Howdy👋</h1>
        
        <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
        Hello, gorgeous stranger! You probably already knew this, but I&apos;m a curiosity-led full-stack software developer, mostly proficient in a range of <Link to={"/skill"}>technologies</Link>, including JavaScript, HTML, CSS, Tailwind, PHP, WordPress, Bootstrap, MySQL, and Git.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
        For me, coding isn&apos;t just a
            job or hobby; it&rsquo;s therapy, a
            creative outlet, an escape, a sanctuary where I find solace and fulfillment. I discover a space where my
            mind can wander freely, exploring endless possibilities.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
        In 2019, I was already freestyling in web design, dropping hits back to back. Initially, I designed websites with WordPress and any <Link to={"/skill"}>technologies</Link> I could get my hands on, both as a hobby and for various campus events at my university.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      However, it wasn&apos;t until shortly before I graduated from university with my
                mechanical engineering degree in 2021 that I truly discovered my potential and decided to turn my passion
                for web <a href="https://thesegunonakoya.me/technologies.html">technologies</a> into a profession.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      Building on this discovery, I made a significant leap forward in 2022 by founding a business that specializes in creating e-commerce websites, along with a variety of other website types, for small and medium-sized businesses.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      This initiative not only allowed me to improve my skills but also provided the opportunity to immerse myself extensively in WooCommerce, thereby expanding my proficiency in WordPress and other <a href="https://thesegunonakoya.me/technologies.html">technologies</a> organically.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      Fast-forward to late 2023
            and early 2024, I ventured into full-stack software development, embarking on an exhilarating journey.
            Despite the inevitable challenges of debugging and troubleshooting, I find joy in every step, seeing each
            setback as an opportunity to learn and grow.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      Up until now, I have
            remained driven by a relentless pursuit of greatness. I strive to push the boundaries of what&rsquo;s possible.
            This journey has been nothing short of remarkable, and I eagerly anticipate the adventures that lie ahead.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      In my free time, I love working on play projects and engaging in activities that foster my creativity. When I&rsquo;m not coding, you will find me jamming to my Spotify playlist or trying to complete another daily challenge in Sudoku.
      </h2>

      <h2
        style={{ color: 'rgb(137, 148, 174)' }}
        className="text-left mx-[5vw] md:mx-[20vw] mt-5 text-[0.85rem] md:text-sm font-medium md:font-medium leading-[1.9] md:leading-relaxed"
      >
      I
      am excited about the future, and I appreciate you for taking the time to learn about my story. Feel free to <a href="http://thesegunonakoya.me/contact.html">connect with me</a> on LinkedIn or check out my GitHub for some of my projects.
      </h2>
        </div>
        </>
    );
}

export default About;