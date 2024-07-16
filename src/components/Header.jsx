import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../assets/svg/hamburger.svg';
import Close from '../assets/svg/close.svg';
import Spotify from '../assets/svg/spotify.svg';

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

        async function fetchCurrentlyPlaying() {
      const currentlyPlayingElement = document.getElementById('currently-playing');
      currentlyPlayingElement.innerHTML = '';
    
      const svgIcon = `<img src="${Spotify}" style="display: inline; vertical-align: middle; margin: 0 5px 0 3px;" />`;
    
      const currentHour = new Date().getHours();
      let endText;
      if (currentHour >= 5 && currentHour < 12) {
        endText = "How's your morning going?";
      } else if (currentHour >= 12 && currentHour < 17) {
        endText = "How's your day going?";
      } else if (currentHour >= 17 && currentHour < 21) {
        endText = "How's your evening going?";
      } else if (currentHour >= 21 || currentHour < 4) {
        endText = "How's your night going?";
      } else {
        endText = "Up all night too huh?";
      }
    
      try {
        const response = await fetch('/api/spotify.js');
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
    
        const data = await response.json();
    
        if (!data.item) {
          currentlyPlayingElement.innerHTML = `${svgIcon} I'm not listening to anything at the moment 😴${endText} <span style='margin: 0 3px 0 3px;'>🎈</span>`;
          return;
        }
    
        const artistName = data.item.artists[0].name;
        currentlyPlayingElement.innerHTML = `${svgIcon} I'm currently listening to <span style='color: rgb(92, 135, 246); margin: 0 3px 0 2px;'>${data.item.name}</span> by <span style='margin: 0 3px 0 3px;'>${artistName}</span> <span style='margin: 0 2px 0 2px;'>🎧</span> <span style='margin: 0 3px 0 3px;'>${endText}</span> <span style='margin: 0 3px 0 3px;'>🎈</span>`;
    
      } catch (error) {
        console.error('Error fetching currently playing track:', error);
        currentlyPlayingElement.innerHTML = `${svgIcon} I'm not listening to anything at the moment <span style='margin: 0 3px 0 3px;'>😴</span> ${endText} <span style='margin: 0 3px 0 3px;'>🎈</span>`;
      }
    }
    
    fetchCurrentlyPlaying();
    const intervalId = setInterval(fetchCurrentlyPlaying, 60 * 60 * 1000);

    return () => {
      document.getElementById('hamburger').removeEventListener('click', handleHamburgerClick);
      document.getElementById('close').removeEventListener('click', handleCloseClick);
      clearInterval(intervalId);
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
          <div className="scrolling-text">
            <p
              id="currently-playing"
              className="text-[0.7rem] md:text-[0.7rem] font-medium md:font-medium text-[#E2EAFD]"
            >
              <span style={{ visibility: 'hidden' }}>Loading...</span>
            </p>
          </div>
        </div>

        <div className="p-2">
          <nav className="flex justify-end md:mr-14 md:mt-2">
            <div
              id="menu"
              className="hidden md:flex font-base md:gap-4 md:text-sm"
              role="navigation"
              aria-label="Main Menu"
            >
                <Link to={"/"} className="text-sm md:text-xs font-normal md:font-semibold p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Home
              </Link>
              
              <Link to={"/about"} className="text-sm md:text-xs font-normal md:font-semibold p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                About Me
              </Link>

              <Link to={"/experience"} className="text-sm md:text-xs font-normal md:font-semibold p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Experience
              </Link>

              <Link to={"/skill"} className="text-sm md:text-xs font-normal md:font-semibold p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                My Tech Stack
              </Link>
              
              <Link to={"/projects"} className="text-sm md:text-xs font-normal md:font-semibold p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
                Projects
              </Link>

              <Link to={"/contact"} className="text-sm md:text-xs font-normal md:font-semibold p-2 underline-animation text-[#8994AE] hover:text-[#5C87F6]">
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
        <nav className="flex flex-col items-center gap-4">
          <a
            href="../"
            className="text-lg font-semibold text-[#8994AE] hover:text-[#5C87F6]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-[#8994AE] hover:text-[#5C87F6]"
          >
            About Me
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-[#8994AE] hover:text-[#5C87F6]"
          >
            Experience
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-[#8994AE] hover:text-[#5C87F6]"
          >
            My Tech Stack
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-[#8994AE] hover:text-[#5C87F6]"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-[#8994AE] hover:text-[#5C87F6]"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;