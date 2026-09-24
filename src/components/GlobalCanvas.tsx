'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, Float } from '@react-three/drei';
import { ReactNode, useRef } from 'react';
import * as THREE from 'three';

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[-4, 2, -5]}>
        <mesh>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#333333" wireframe transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[5, -2, -8]}>
        <mesh>
          <torusGeometry args={[1.5, 0.4, 16, 32]} />
          <meshStandardMaterial color="#444444" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={1.5} position={[-6, -3, -10]}>
        <mesh>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#222222" wireframe transparent opacity={0.8} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5} position={[4, 3, -12]}>
        <mesh>
          <dodecahedronGeometry args={[1.8, 0]} />
          <meshStandardMaterial color="#555555" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
    </>
  );
}

export default function GlobalCanvas({ children }: { children?: ReactNode }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <FloatingShapes />
        
        {children}
        <Preload all />
      </Canvas>
    </div>
  );
}
