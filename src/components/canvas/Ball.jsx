import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from 'three';  // Import THREE to use TextureLoader
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal, setDecal] = useState(null);
  const [error, setError] = useState(null);

  // Use useEffect to handle texture loading and errors
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    
    loader.load(
      imgUrl,
      (texture) => {
        setDecal(texture);
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
        setError(err.message);
      }
    );
  }, [imgUrl]);

  if (error) {
    return <div>Error loading texture: {error}</div>;
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
