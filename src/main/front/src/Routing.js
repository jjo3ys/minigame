import './App.css';
import './Background.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainApp from './App';
import MainQuiz from './Quiz';

function Routing() {
    return (
        <div className='App'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainApp />} />
                <Route path='main' element={<MainApp />} />
                <Route path='quiz' element={<MainQuiz />} />
            </Routes>
        </BrowserRouter>
        </div>    
    );
}

export default Routing;