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

    const [quizIdList, setQuizIdList] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [answer, setAnswer] = useState('');
    const [getAnswer, setGetAnswer] = useState('');
    const [count, setCount] = useState('');

    const [btnDisable, setBtnDisable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const fetchQuiz = async () => {
        if (quizIdList.length===0){
            axios.get('/question')
            .then((response) => {
                setImageUrl('/images/'+response.data.imgName);
                setAnswer(response.data.answer);
                setQuizIdList(String(response.data.id));
            })
            .catch((error) => setShowModal(true));
        } else {
            axios.get('/question?qId='+quizIdList)
            .then((response) => {
                setImageUrl('/images/'+response.data.imgName);
                setAnswer(response.data.answer);
                setQuizIdList(quizIdList+','+response.data.id);
            })
            .catch((error) => setShowModal(true));
        }  

        setCount(3);
        await sleep(1000);
        setCount(2);
        await sleep(1000);
        setCount(1);
        await sleep(1000);
        setCount('');
        setShowImg(true);
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
        setShowImg(false)
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
    const buttonStyle = {
        fontSize: windowWidth/100+'px',
        width: windowWidth/10+'px',
        height: windowWidth/30+'px',
        borderRadius: windowWidth/120+'px'
    };
    const buttonStyle2 = {
        fontSize: windowWidth/100+'px',
        width: windowWidth/20+'px',
        height: windowWidth/30+'px',
        borderRadius: windowWidth/120+'px'
    };
    return (
        <div className='main'>
                
            <div className='gameMachine' style={divStyle}>
            <br/>Jo's ARCADE
                <div className='display' style={displayStyle}>   
                    {showImg && imageUrl && <img className='quizImg' src={imageUrl} alt="이미지" />}
                    <div className='countDiv'>
                        {count}  
                    </div>   
                    <div className='answerText'>
                        {getAnswer}  
                    </div>          
                </div>   
                <div className='buttonDiv' style={btnDivStyle}>
                    <button className='bgmButton' onClick={bgmPlaying} style={buttonStyle}>
                        {isPlaying ? 'bgm Off' : 'bgm On'}
                    </button>
                    <button className='answerButton' onClick={answerButton} disabled={!btnDisable} style={buttonStyle2}>Ans</button>
                    <button className='nextQButton' onClick={nextQButton} disabled={btnDisable} style={buttonStyle2}>Next</button>     
                </div>     
            </div>
            {showModal && (
            <div className='modal_main'>
                끝 <br/>
                <div className='modal_sub'>
                    Designed & Programed By ys J
                </div>
            </div>
            )}
              
        </div>
    );
}


export default Quiz;