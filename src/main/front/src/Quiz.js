import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useBgm } from './BgmContext';

import './Quiz.css';
import './Background.css';
import './Button.css';

const answerSound = new Audio('/soundEffect/getAnswer.wav');
const nextQSound = new Audio('/soundEffect/newQuiz.wav');

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function Quiz() {
    const {isPlaying, bgmPlaying} = useBgm();
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageUrl, setImageUrl] = useState('');
    const [answer, setAnswer] = useState('');
    const [getAnswer, setGetAnswer] = useState('');
    const [count, setCount] = useState('');

    const [btnDisable, setBtnDisable] = useState(false);

    const fetchQuiz = async () => {
        const response = {
            imageUrl:'/quizImage/170648208914200.png',
            answer:'아이유'
        }
        setCount(3);
        await sleep(1000);
        setCount(2);
        await sleep(1000);
        setCount(1);
        await sleep(1000);
        setCount('');
        setImageUrl(response.imageUrl);
        setAnswer(response.answer)
    }

    useEffect(() =>{
        const handleResize = () => {
          setWindowHeight(window.innerHeight);
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        }
      }, []);

    const answerButton = () => {
        answerSound.play();
        setImageUrl('');
        setBtnDisable(false);
        setGetAnswer(answer);
    }
    const nextQButton = () => {
        nextQSound.play();    
        setGetAnswer('');
        setBtnDisable(true);
        fetchQuiz();
    }
    const divStyle = {
        height: windowHeight<windowWidth/1942*1365? windowHeight*9/10+'px': (windowWidth*9/10)/1942*1365+'px',
        width: windowHeight<windowWidth/1942*1365? (windowHeight*9/10)/1365*1942+'px': windowWidth*9/10+'px',
    };
    const displayStyle = {
        height: windowHeight<windowWidth/1942*1365? windowHeight*3/7+'px': (windowWidth*3/7)/3*2+'px',
        width: windowHeight<windowWidth/1942*1365? (windowHeight*3/7)/2*3+'px': windowWidth*3/7+'px',
    }
    const btnDivStyle = {
        width: windowHeight<windowWidth/1942*1365? (windowHeight*3/7)/2*3+'px': windowWidth*3/7+'px',
    }

    return (
        <div className='main'>
                
            <div className='gameMachine' style={divStyle}>
            <br/>Jo's ARCADE
                <div className='display' style={displayStyle}>   
                    {imageUrl && <img className='quizImg' src={imageUrl} alt="이미지" />}
                    <div className='countDiv'>
                        {count}  
                    </div>   
                    <div className='answerText'>
                        {getAnswer}  
                    </div>          
                </div>   
                <div className='buttonDiv' style={btnDivStyle}>
                    <button className='bgmButton' onClick={bgmPlaying}>
                        {isPlaying ? 'bgm Off' : 'bgm On'}
                    </button>
                    <button className='answerButton' onClick={answerButton} disabled={!btnDisable}>A</button>
                    <button className='nextQButton' onClick={nextQButton} disabled={btnDisable}>N</button>     
                </div>     
            </div>
              
        </div>
    );
}


export default Quiz;