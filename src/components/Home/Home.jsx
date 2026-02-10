import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ParticleBackground from '../ParticleBackground';
import './Home.css';

export const Home = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [showButton, setShowButton] = useState(false);

    const fullText1 = "Welcome to ";
    const fullText2 = "The Stackly ";
    const fullText3 = "let's grow together";

    useEffect(() => {
        let currentText1 = '';
        let currentText2 = '';
        let currentText3 = '';

        const typeText1 = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                if (i < fullText1.length) {
                    currentText1 += fullText1.charAt(i);
                    setText1(currentText1);
                    i++;
                } else {
                    clearInterval(intervalId);
                    typeText2();
                }
            }, 50);
        };

        const typeText2 = () => {
            let j = 0;
            const intervalId = setInterval(() => {
                if (j < fullText2.length) {
                    currentText2 += fullText2.charAt(j);
                    setText2(currentText2);
                    j++;
                } else {
                    clearInterval(intervalId);
                    setTimeout(typeText3, 200);
                }
            }, 100);
        };

        const typeText3 = () => {
            let k = 0;
            const intervalId = setInterval(() => {
                if (k < fullText3.length) {
                    currentText3 += fullText3.charAt(k);
                    setText3(currentText3);
                    k++;
                } else {
                    clearInterval(intervalId);
                    setShowButton(true);
                }
            }, 50);
        };

        typeText1();

        return () => {
        };
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    useEffect(() => {
        // Attempt autoplay on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Set volume to 50%
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            }
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault();
        setIsExiting(true);
        setTimeout(() => {
            navigate('/about');
        }, 800); // Duration matches CSS transition
    };

    return (
        <div className={`home-container ${isExiting ? 'home-exiting' : ''}`}>
            <ParticleBackground />

            <audio ref={audioRef} loop>
                <source src="/musics/Perplexity Comet Zen Soundtrack(MP3_160K).mp3" type="audio/mp3" />
            </audio>

            <div className="content-wrapper">
                <section className="welcome-msg">
                    <h1>{text1}<span className='stackly-span'>{text2}</span></h1>
                    <p>{text3}</p>
                    <a href="/about" onClick={handleStart}>
                        <button className={`fade-in-btn ${showButton ? 'visible' : ''}`}>Let's Start</button>
                    </a>

                    <div className="hero-content-extra">
                    </div>
                </section>



            </div>
        </div>
    )
}
