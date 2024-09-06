import React, { useEffect } from 'react';
import mailSvg from '../assets/svg/mail.svg';
import mailSvgColor from '../assets/svg/mail-hover.svg';
import githubSvg from '../assets/svg/github.svg';
import githubSvgColor from '../assets/svg/github-hover.svg';
import linkedinSvg from '../assets/svg/linkedin.svg';
import linkedinSvgColor from '../assets/svg/linkedin-hover.svg';
import instagramSvg from '../assets/svg/instagram.svg';
import instagramSvgColor from '../assets/svg/instagram-hover.svg';
import whatsappSvg from '../assets/svg/whatsapp.svg';
import whatsappSvgColor from '../assets/svg/whatsapp-hover.svg';


const Footer = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.hover-svg');

    images.forEach(img => {
      const originalSrc = img.src;
      const hoverSrc = img.getAttribute('data-hover-src');

      if (!hoverSrc) {
        console.warn(`Image with src ${originalSrc} does not have a data-hover-src attribute`);
        return;
      }

      const handleMouseEnter = () => {
        img.src = hoverSrc;
      };

      const handleMouseLeave = () => {
        img.src = originalSrc;
      };

      img.addEventListener('mouseenter', handleMouseEnter);
      img.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        img.removeEventListener('mouseenter', handleMouseEnter);
        img.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      {/* Desktop Footer */}
      <section 
        className="hidden md:flex flex-col items-center justify-center fixed left-0 top-0 h-full p-5 ml-5"
        role="complementary" 
        aria-label="Social Media Links"
      >
        <a href="mailto:thesegunonakoya@gmail.com" target="_blank" rel="noopener noreferrer" className="my-5">
          <img 
            className="hover-svg w-8 h-8"
            src={mailSvg}
            data-hover-src={mailSvgColor}
            alt="Gmail" 
          />
        </a>
        <a href="https://github.com/thesegunonakoya" target="_blank" rel="noopener noreferrer" className="my-5">
          <img 
            className="hover-svg w-7 h-7"
            src={githubSvg} 
            data-hover-src={githubSvgColor} 
            alt="GitHub" 
          />
        </a>
        <a href="https://www.linkedin.com/in/thesegunonakoya/" target="_blank" rel="noopener noreferrer" className="my-5">
          <img 
            className="hover-svg w-7 h-7"
            src={linkedinSvg} 
            data-hover-src={linkedinSvgColor} 
            alt="LinkedIn" 
          />
        </a>
        <a href="https://www.instagram.com/thesegunonakoya/" target="_blank" rel="noopener noreferrer" className="my-5">
          <img 
            className="hover-svg w-7 h-7"
            src={instagramSvg} 
            data-hover-src={instagramSvgColor} 
            alt="Instagram" 
          />
        </a>
        <a href="https://wa.me/2349033990067" target="_blank" rel="noopener noreferrer" className="my-5">
          <img 
            className="hover-svg w-8 h-8"
            src={whatsappSvg} 
            data-hover-src={whatsappSvgColor} 
            alt="WhatsApp" 
          />
        </a>
      </section>

      {/* Mobile Footer */}
      <section className="p-2 mb-8 md:mb-3">
        <div className="block md:hidden">
          <ul className="flex justify-center items-center flex-wrap gap-3">
            <li className="mx-2 my-1">
              <a href="mailto:thesegunonakoya@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="w-7 h-7" src={mailSvg} alt="Gmail" />
              </a>
            </li>
            <li className="mx-2 my-1">
              <a href="https://github.com/thesegunonakoya" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5" src={githubSvg} alt="GitHub" />
              </a>
            </li>
            <li className="mx-2 my-1">
              <a href="https://www.linkedin.com/in/thesegunonakoya/" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5" src={linkedinSvg} alt="LinkedIn" />
              </a>
            </li>
            <li className="mx-2 my-1">
              <a href="https://www.instagram.com/thesegunonakoya/" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5" src={instagramSvg} alt="Instagram" />
              </a>
            </li>
            <li className="mx-2 my-1">
              <a href="https://wa.me/2349033990067" target="_blank" rel="noopener noreferrer">
                <img className="w-6 h-6" src={whatsappSvg} alt="WhatsApp" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-7 block md:hidden">
        </div>
      </section>
    </>
  );
}

export default Footer;