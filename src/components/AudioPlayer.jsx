import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const newSound = new Howl({
            src: ['src/assets/stranger-things-124008.mp3'], // Placeholder ambient track
            loop: true,
            volume: 0.3,
            autoplay: false,
        });
        setSound(newSound);

        return () => {
            newSound.unload();
        };
    }, []);

    const togglePlay = () => {
        if (!sound) return;
        if (isPlaying) {
            sound.pause();
        } else {
            sound.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-player" onClick={togglePlay}>
            <div className={`equalizer ${isPlaying ? 'playing' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <span className="audio-text">{isPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>
        </div>
    );
};

export default AudioPlayer;
