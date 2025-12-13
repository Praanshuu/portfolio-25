import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-3d">
                <Canvas shadows dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>
            <div className="hero-content">
                <h1 className="hero-title">
                    PRANSHU<br />SAHU
                </h1>
                <div className="hero-meta">
                    <p className="hero-role">FULL STACK & GENERATIVE AI DEVELOPER</p>
                    <p className="hero-location">BASED IN CHHATTISGARH, INDIA</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
