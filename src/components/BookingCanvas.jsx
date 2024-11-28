import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Html, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const BookingScene = () => {
  // Replace the path with your actual 3D model's path (for example, booking_scene.gltf)
  const bookingScene = useGLTF('./booking_scene/scene.gltf');

  return (
    <mesh>
      {/* Lighting for the scene */}
      <hemisphereLight intensity={0.15} groundColor={'black'} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Replace the primitive object with your 3D model */}
      <primitive
        object={bookingScene.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
      <Html position={[0, 1, 0]}>
        {/* You can add HTML or text elements inside the 3D scene */}
        {/* <div style={{ color: 'white', fontSize: '20px' }}>
          Booking in progress
        </div> */}
      </Html>
    </mesh>
  );
};

const BookingCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BookingScene />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BookingCanvas;
