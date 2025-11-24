import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const newSound = new Howl({
            src: ['/stranger-things-124008.mp3'], // Updated path for public folder if moved, or keep relative if in src
            // Wait, user didn't move the audio file to public. It's still in src/assets?
            // If I want it to work in production, I should probably move audio to public too.
            // Let's check where the audio file is.
            // It was in src/assets/stranger-things-124008.mp3
            // I should move it to public as well to be safe.
            loop: true,
            volume: 0.3,
            autoplay: true,
            onplay: () => setIsPlaying(true),
            onpause: () => setIsPlaying(false),
            onend: () => setIsPlaying(false)
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
