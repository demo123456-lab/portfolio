import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  // Load the GLTF model
  const earth = useGLTF('./planet/scene.gltf'); // Ensure this path is correct and accessible
  return (
    <primitive
      object={earth.scene}
      scale={2.0} // Adjust scale to fit your canvas
      position-y={0} // Position the Earth on the Y-axis
      rotation-y={0} // Initial rotation
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows // Enables shadows
      frameloop="demand" // Optimizes rendering
      gl={{ preserveDrawingBuffer: true }} // Ensures the canvas retains its rendering buffer
      camera={{
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position
      }}
    >
      {/* Suspense for loading fallback */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Orbit controls for interactivity */}
        <OrbitControls
          autoRotate
          enableZoom={false} // Set to true if zoom functionality is needed
          maxPolarAngle={Math.PI / 2} // Restricts rotation above the sphere
          minPolarAngle={Math.PI / 2} // Restricts rotation below the sphere
        />
        <Earth /> {/* Earth Model */}
        <Preload all /> {/* Preloads assets */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
