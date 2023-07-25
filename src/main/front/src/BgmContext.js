import React, { createContext, useContext, useState } from 'react';

const bgm = new Audio('/bgm/Hawai-five-O.mp3');
const BgmContext = createContext(false);
// let isPlaying = false;
// const BgmContext = createContext({isPlaying:isPlaying, bgmPlaying:()=>{
//     if (isPlaying) bgm.pause();
//     else {
//         bgm.currentTime = 0;
//         bgm.play();
//     }
//     isPlaying = !isPlaying;
// }});

export const useBgm = () => { return useContext(BgmContext) };

export const BgmProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const bgmPlaying = () => {
        if (isPlaying) bgm.pause();
        else {
            bgm.currentTime = 0;
            bgm.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <BgmContext.Provider value={{isPlaying, bgmPlaying}}>
            {children}
        </BgmContext.Provider>
    )
}