import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cloud, Grid, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import WindTurbine from './WindTurbine';

// Removed FloatingCloud entirely as it clashes with light/dark modes

const Hero3DSceneContent = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle parallax/sway on scroll or time
  useFrame(({ clock, camera }) => {
    if (groupRef.current) {
      // Gentle sway
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 0.8;
    }
    // Very subtle camera rotation based on time (giving a slow pan effect)
    camera.position.x = Math.sin(clock.elapsedTime * 0.1) * 3;
    camera.lookAt(0, 10, 0);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 4, 30]} fov={50} />

      <group ref={groupRef}>
        {/* Wind Turbines pushed far to the sides to frame the text nicely and not obstruct */}
        {/* Left cluster */}
        <WindTurbine position={[-18, -4, -10]} scale={1.2} rotationSpeed={0.015} />
        <WindTurbine position={[-26, -4, -25]} scale={0.9} rotationSpeed={0.012} />
        <WindTurbine position={[-14, -4, -40]} scale={0.6} rotationSpeed={0.009} />
        
        {/* Right cluster */}
        <WindTurbine position={[18, -4, -15]} scale={1.1} rotationSpeed={0.013} />
        <WindTurbine position={[28, -4, -30]} scale={0.8} rotationSpeed={0.018} />
        <WindTurbine position={[16, -4, -45]} scale={0.55} rotationSpeed={0.011} />

        {/* Data/Wind Particles concentrated near the headline */}
        <Sparkles 
          count={400} 
          scale={[30, 15, 20]} 
          size={5} 
          speed={0.5} 
          opacity={0.8} 
          color="#22d3ee" 
          position={[0, 8, -5]}
        />
        <Sparkles 
          count={200} 
          scale={[40, 20, 30]} 
          size={8} 
          speed={0.3} 
          opacity={0.5} 
          color="#818cf8" 
          position={[0, 6, -10]}
        />

        {/* Geospatial Grid / Terrain (Subtle watermark effect) */}
        <Grid 
          position={[0, -4.1, 0]} 
          args={[150, 150]} 
          cellSize={1.5} 
          cellThickness={0.5} 
          cellColor="#38bdf8" 
          sectionSize={6} 
          sectionThickness={1} 
          sectionColor="#818cf8" 
          fadeDistance={60} 
          fadeStrength={1}
        />
      </group>
    </>
  );
};

const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Hero3DSceneContent />
      </Canvas>
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-sirpi-bg/30 via-sirpi-bg/60 to-sirpi-bg pointer-events-none" />
    </div>
  );
};

export default Hero3DScene;
