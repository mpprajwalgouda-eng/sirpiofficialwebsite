import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WindTurbineProps {
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
  color?: string;
}

const WindTurbine: React.FC<WindTurbineProps> = ({ 
  position = [0, 0, 0], 
  scale = 1, 
  rotationSpeed = 0.01,
  color = '#e2e8f0' // Subtle light gray for realism
}) => {
  const bladesRef = useRef<THREE.Group>(null);

  // Rotate blades smoothly
  useFrame(() => {
    if (bladesRef.current) {
      bladesRef.current.rotation.z -= rotationSpeed;
    }
  });

  // Abstract, premium wireframe/data-viz look
  const mastMaterial = new THREE.MeshBasicMaterial({ 
    color: '#38bdf8', // Cyan
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  
  const bladeMaterial = new THREE.MeshBasicMaterial({ 
    color: '#818cf8', // Indigo/Purple
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });

  return (
    <group position={position} scale={scale}>
      {/* Mast */}
      <mesh position={[0, 6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.6, 12, 32]} />
        <primitive object={mastMaterial} />
      </mesh>

      {/* Nacelle (Hub housing) */}
      <mesh position={[0, 12, -0.6]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.9, 2.5]} />
        <primitive object={mastMaterial} />
      </mesh>

      {/* Rotor & Blades Assembly */}
      <group position={[0, 12, 0.7]} ref={bladesRef}>
        {/* Nose cone */}
        <mesh position={[0, 0, 0.3]} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <primitive object={bladeMaterial} />
        </mesh>

        {/* 3 Blades distributed at 120 degrees */}
        {[0, 1, 2].map((i) => {
          const angle = (i * Math.PI * 2) / 3;
          return (
            <group key={i} rotation={[0, 0, angle]}>
              <mesh position={[0, 5, 0]} castShadow receiveShadow>
                {/* Thin, long blade */}
                <boxGeometry args={[0.2, 10, 0.05]} />
                <primitive object={bladeMaterial} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
};

export default WindTurbine;
