import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../assets/svg/hamburger.svg';
import Close from '../assets/svg/close.svg';
import CurrentlyPlaying from './CurrentlyPlaying';

const Header = () => {
  useEffect(() => {
    const handleHamburgerClick = () => {
      document.getElementById('mobile-menu-overlay').classList.remove('hidden');
      document.getElementById('hamburger').style.display = 'none';
      document.getElementById('close').classList.add('visible');
    };

    const handleCloseClick = () => {
      document.getElementById('mobile-menu-overlay').classList.add('hidden');
      document.getElementById('hamburger').style.display = 'inline-block';
      document.getElementById('close').classList.remove('visible');
    };

    document.getElementById('hamburger').addEventListener('click', handleHamburgerClick);
    document.getElementById('close').addEventListener('click', handleCloseClick);

    return () => {
      document.getElementById('hamburger').removeEventListener('click', handleHamburgerClick);
      document.getElementById('close').removeEventListener('click', handleCloseClick);
    };
  }, []);

  return (
    <header className="bg-[#111318]">
      <section className="bg-[#111318]">
        <div
          className="w-full overflow-hidden bg-[#15181e] py-4"
          style={{
            borderBottomColor: 'rgb(32, 36, 45)',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
          }}
        >
          <CurrentlyPlaying /> {/* Use the new component here */}
        </div>

        <div className="p-2">
          <nav className="flex justify-end md:mr-14 md:mt-2">
            <div
              id="menu"
              className="hidden md:flex font-base md:gap-4 md:text-sm"
              role="navigation"
              aria-label="Main Menu"
            >
              <Link to={"/"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Home
              </Link>
              
              <Link to={"/about"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                About Me
              </Link>

              <Link to={"/experience"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Experience
              </Link>

              <Link to={"/skill"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                My Tech Stack
              </Link>
              
              <Link to={"/projects"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Projects
              </Link>

              <Link to={"/contact"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Get In Touch
              </Link>

            </div>
            <div id="mobile-menu" className="md:hidden p-2 z-50">
              <button
                id="hamburger"
                aria-label="Open Menu"
                className="w-8 h-8 flex items-center justify-center"
              >
                <img className="w-full h-full" src={Hamburger} alt="hamburger" />
              </button>
            </div>
          </nav>
        </div>
      </section>

      <div
        id="mobile-menu-overlay"
        className="fixed inset-0 bg-[#111318] hidden flex-col items-center justify-center z-50"
      >
        <button
          id="close"
          className="close-btn w-8 h-8 items-center justify-center absolute top-4 right-4"
          aria-label="Close Menu"
        >
          <img className="w-full h-full" src={Close} alt="close" />
        </button>
        <nav className="flex flex-col items-center justify-center gap-4 h-screen">
          <Link to={"/"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
            Home
          </Link>
          
          <Link to={"/about"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
            About Me
          </Link>
      
          <Link to={"/experience"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
            Experience
          </Link>
      
          <Link to={"/skill"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
            My Tech Stack
          </Link>
          
          <Link to={"/projects"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
            Projects
          </Link>
      
          <Link to={"/contact"} className="text-sm md:text-xs font-normal md:font-normal p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;