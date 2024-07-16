import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningModel from './SpinningModel';
import useResponsive from '../useResponsive';

const Medal3D = ({tab, path}) => {
  const [rotationY, setRotationY] = useState(0);
  const isDesktop = useResponsive('up', 'lg');
  useEffect(() => {
    let start;
    const duration = 2000; // Duration of the animation in milliseconds
    const animate = (time) => {
      if (!start) start = time;
      const elapsed = time - start;
      const newRotationY = Math.PI * (elapsed / duration); // Rotate 180 degrees over the duration
      setRotationY(Math.min(newRotationY, Math.PI)); // Cap at 180 degrees (π radians)
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [tab]);

  return (
    <Canvas style={{ height: !isDesktop ? '300px' : '500px', width: !isDesktop ? '300px' : '500px' }} camera={{ position: [0, 0, 10], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 25, 45]} />
      <SpinningModel modelPath={path} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Medal3D;