import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useBgm } from './BgmContext';
import './App.css';
import './Background.css';
import './Button.css';

const helpButtonSound = new Audio('/soundEffect/help.mp3');
const startSound = new Audio("/soundEffect/buttonEffect.wav");

function App() {
  const {isPlaying, bgmPlaying} = useBgm();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  
  const navigate = useNavigate();

  const startButton = () => {
    startSound.play();
    setShowTypeModal(true);
    // navigate('/quiz');
  }
  const wordButton = () =>{
    startSound.play();
    setShowTypeModal(false);
    navigate('/quiz', {
        state:{
          type:'word'
        }
      }
    );
  }
  const charImgButton = () =>{
    startSound.play();
    setShowTypeModal(false);
    navigate('/quiz', {
      state:{
        type:'image'
      }
    }
  );
  }

  const helpButton = () => {
    helpButtonSound.play()
    setShowModal(!showModal);
  }
  const typeModalExitButton = () => {
    helpButtonSound.play()
    setShowTypeModal(false);
  }
  
  useEffect(() =>{
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
        <div className='title' style={fontStyle}>
          Jo's<br/> <br/>ARCADE
        </div>
        
        <div className='bgmDiv' style={divStyle}>
          <button className="bgmButton" onClick={bgmPlaying} style={buttonStyle}>
            {isPlaying ? 'bgm Off' : 'bgm On'}
          </button>
        </div>
        <div className='startDiv' style={divStyle}>
          <button className='startButton' onClick={startButton} style={buttonStyle}>
            Game Start
          </button>
        </div>   
        <div className='helpDiv' style={divStyle}>
          <button className='helpButton' onClick={helpButton} style={buttonStyle}>
            Help?
          </button>
        </div>   
        {showTypeModal && (
          <div className='popUp'>
            <div className='startSub'>
              <div className='buttonDiv'>
                <button className='wordButton' onClick={wordButton} style={buttonStyle}>
                  이어말하기
                </button>
                <button className='charImgButton' onClick={charImgButton} style={buttonStyle}>
                  인물 퀴즈
                </button>
              </div>
              <button className='closeButton' onClick={typeModalExitButton}>X</button>
              문제 유형 중 하나를 고르세요!!
            </div>
          </div>
        )}
        {showModal && (
          <div className='popUp'>
            <div className='sub'>
              !!!전체 화면 플레이를 권장합니다!!!<br/>
              !! 안그러면 버튼 위치가..!!<br/><br/>

              게임에는 인물& 네 글자 이어말하기<br/>
              두 가지 유형이 있습니다.<br/>
              인물의 경우 화면에 인물사진이 나오며<br/>
              인물의 이름을 말하시면 됩니다.<br/><br/>

              이어말하기의 경우 화면에 정답 네 글자중<br/>
              앞의 두 글자가 나오며<br/>
              뒤 두 글자를 말하시면 됩니다.<br/><br/>

              bgm은 On/Off만 지원합니다!!<br/>
              게임 시작 후 A 버튼은 Answer을 의미하며 답을 공개합니다.<br/>
              Img 버튼은 인물 퀴즈를 의미하며 다음 인물 사진을 가져옵니다.<br/>
              4len 버튼은 네 글자 이어말하기 퀴즈를 의미하며 다음 글자를 가져옵니다.<br/><br/>
              
              모든 이미지나 대사에 대한 저작권은 원작자에 있으며<br/>
              그 외 모든 요소는 제작자가 만든 것을 밝힙니다.<br/><br/>
              
              Designed & Programed By ys J
              <button className='closeButton' onClick={helpButton}>X</button>
            </div>
          </div>
        )}
        
      </body>
  );
}

export default App;