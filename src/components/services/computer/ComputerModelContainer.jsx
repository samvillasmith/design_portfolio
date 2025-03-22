import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from '../computer/Computer';
import { OrbitControls, Html, Stage, PerspectiveCamera } from '@react-three/drei';

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={<Html><span>Loading...</span></Html>}>
        <Stage environment="night" intensity={0.5}>
          <Model />
        </Stage>
        {/* Added autoRotateSpeed={0.5} to slow down the rotation */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.6} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;