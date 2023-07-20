import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const bgm = new Audio('/bgm/Hawai-five-O.mp3');
bgm.volume = 0.5;
const startSound = new Audio("/soundEffect/buttonEffect.wav");

function App() {
  const [hello, setHello] = useState('')
  const [isPlaying, setPlaying] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bgmButton = () => {
    if (isPlaying) bgm.pause();
    else {
      bgm.currentTime = 0;
      bgm.play();
    }
    setPlaying(!isPlaying);
  }
  const startButton = () => {
    startSound.play();
  }
  
  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const buttonStyle = {
    fontSize: windowWidth/100+'px',
    width: windowWidth/10+'px',
    height: windowWidth/30+'px',
    borderRadius: windowWidth/120+'px'
  };

  const divStyle = {
    top: windowWidth <1200 ? '70%' : windowWidth < 1500 ? '75%' : windowWidth < 1800? '80%' : '85%',
  };

  const fontStyle = {
    fontSize: windowWidth/20+'px'
  };

  return (
    <body>
      <div className='main' style={fontStyle}>
        Joe's<br/> ARCADE
      </div>
      <div className='bgmDiv' style={divStyle}>
        <button className="bgmButton" onClick={bgmButton} style={buttonStyle}>
          {isPlaying ? 'bgm Off' : 'bgm On'}
        </button>
      </div>
      <div className='startDiv' style={divStyle}>
        <button className='startButton' onClick={startButton} style={buttonStyle}
        >Game Start
        </button>
      </div>
    </body>
      
  );
}

export default App;