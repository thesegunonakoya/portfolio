import React, { useEffect, useState } from 'react';
import Spotify from '../assets/svg/spotify.svg';

const CurrentlyPlaying = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState('');

  const fetchCurrentlyPlaying = async () => {
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
        setCurrentlyPlaying(`${svgIcon} I'm not listening to anything at the moment 😴${endText} <span style='margin: 0 3px 0 3px;'>🎈</span>`);
        return;
      }

      const artistName = data.item.artists[0].name;
      setCurrentlyPlaying(`${svgIcon} I'm currently listening to <span style='color: rgb(92, 135, 246); margin: 0 3px 0 2px;'>${data.item.name}</span> by <span style='margin: 0 3px 0 3px;'>${artistName}</span> <span style='margin: 0 2px 0 2px;'>🎧</span> <span style='margin: 0 3px 0 3px;'>${endText}</span> <span style='margin: 0 3px 0 3px;'>🎈</span>`);
    } catch (error) {
      console.error('Error fetching currently playing track:', error);
      setCurrentlyPlaying(`${svgIcon} I'm not listening to anything at the moment <span style='margin: 0 3px 0 3px;'>😴</span> ${endText} <span style='margin: 0 3px 0 3px;'>🎈</span>`);
    }
  };

  useEffect(() => {
    fetchCurrentlyPlaying();
  }, []);

  return (
    <div className="scrolling-text">
      <p
        id="currently-playing"
        className="text-[0.7rem] md:text-[0.7rem] font-medium md:font-medium text-[#E2EAFD]"
        dangerouslySetInnerHTML={{ __html: currentlyPlaying }}
      />
    </div>
  );
};

export default CurrentlyPlaying;