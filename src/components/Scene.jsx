import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = () => {
    const group = useRef();
    const { scene, animations } = useGLTF('/src/assets/6922440b786317131c0db120.glb');
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
            const targetX = (state.mouse.x * Math.PI) / 10;
            const targetY = (state.mouse.y * Math.PI) / 10;

            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.1);
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetY, 0.1);
        }
    });

    return (
        <group ref={group} dispose={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                <primitive
                    object={scene}
                    scale={2.8}
                    position={[0, -3.2, 0]}
                    rotation={[0, -0.2, 0]}
                />
            </Float>
            <ContactShadows opacity={0.4} scale={10} blur={2.5} far={10} resolution={256} color="#000000" />
        </group>
    );
};

const Scene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} />
            <Avatar />
            <Environment preset="city" />
        </>
    );
};

useGLTF.preload('/src/assets/6922440b786317131c0db120.glb');

export default Scene;
