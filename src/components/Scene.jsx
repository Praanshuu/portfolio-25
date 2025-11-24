import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Float, ContactShadows, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const Avatar = () => {
    const group = useRef();
    const { scene, animations } = useGLTF('/avatar.glb');
    const { actions } = useAnimations(animations, group);

    // Play animation if available
    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const firstAnim = Object.keys(actions)[0];
            actions[firstAnim].reset().fadeIn(0.5).play();
        }
    }, [actions]);

    // Make avatar look at mouse
    useFrame((state) => {
        if (group.current) {
            const target = new THREE.Vector3(state.mouse.x * 2, state.mouse.y * 2, 5);
            group.current.lookAt(target);
        }
    });

    return <primitive object={scene} />;
};

const Scene = () => {
    return (
        <group position={[0, -1, 0]}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} />

            <Environment preset="city" />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                <group position={[0, -3.2, 0]} rotation={[0, -0.2, 0]} scale={2.8}>
                    <Avatar />
                </group>
            </Float>
            <ContactShadows opacity={0.4} scale={10} blur={2.5} far={10} resolution={256} color="#000000" />

            <EffectComposer>
                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={0.5} />
            </EffectComposer>
        </group>
    );
};

useGLTF.preload('/avatar.glb');

export default Scene;
