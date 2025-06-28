import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Background from '../Pages/Background';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Skills from '../Pages/Skills';
import { useSelector } from 'react-redux';

function Main() {
    const [activeBtn, setActiveBtn] = useState(0);
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    // Component to display active tab
    const Tabs = ({ num }) => {
        switch (num) {
            case 0:
                return <Home />;
            case 1:
                return <About />;
            case 2:
                return <Background />;
            case 3:
                return <Skills />;
            case 4:
                return <Projects />;
            case 5:
                return <Contact />;
            default:
                return null;
        }
    };

    // Cursor animation
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setPosX(e.clientX);
    //         setPosY(e.clientY);
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);
        

    //     // Cleanup listener on component unmount
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    return (
        <div className='main'>
            <div className='main_in'>
                <Header active={activeBtn} onPress={setActiveBtn} />
                <div className='main_content'>
                    <Tabs num={activeBtn} />
                </div>
            </div>
            {/* <div
                className='dot'
                style={{
                    left: `${posX}px`,
                    top: `${posY}px`,
                }}
            />
            <div
                className='dot_out'
                style={{
                    left: `${posX}px`,
                    top: `${posY}px`,
                }}
            /> */}
        </div>
    );
}

export default Main;
