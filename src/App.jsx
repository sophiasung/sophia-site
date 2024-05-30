import React, { useEffect } from 'react';
import './App.css';
import image from './assets/sophiastarspink.png';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create trail text element
      const trailText = document.createElement('div');
      trailText.classList.add('trail-text');
      trailText.textContent = '⋆'; // Your desired trail text or emoji
      document.body.appendChild(trailText);

      // Correct the position for the scroll offset
      trailText.style.left = `${e.clientX}px`;
      trailText.style.top = `${e.clientY}px`;

      // Apply a delay before removing the trail text to create the trail effect
      setTimeout(() => {
        trailText.remove();
      }, 1000); // Adjust the timeout to control how long the text stays on screen
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="home">
        <NavBar/>
        <div className="lineAfterNav"></div>
        <div className="lineAfterHead"></div>
        <div className='imgcontainer'>
          {/* Marquees */}
          <marquee className="marq1" direction="left" loop="" behavior="alternate" scrollamount="20"> 
            <div className="words"> 
              HI, WELCOME TO MY SITE :3 
            </div> 
          </marquee>

          <marquee className="marq2" direction="" loop="" behavior="alternate" scrollamount="15"> 
            <div className="words"> 
              ECONOMIST. DATA SCIENTIST. DEVELOPER. DESIGNER.
            </div> 
          </marquee>

          <marquee className="marq3" direction="left" loop="" behavior="alternate" scrollamount="20"> 
            <div className="words"> 

            </div> 
          </marquee>

          {/* Image */}
          <img className='SophiaPinkStar' src={image} alt="Sophia Pink Star" />
        </div>


      </div>
      <About id="about"/>
      <Projects id="projects"/>
    </>
  );
}

export default App;
