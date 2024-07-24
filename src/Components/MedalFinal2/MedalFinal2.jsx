import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningModel from './SpinningModel';
import useResponsive from '../useResponsive';

const Medal3D = ({ tab, path }) => {
  const [rotationY, setRotationY] = useState(0);
  const isDesktop = useResponsive('up', 'lg');
  const [currentTab, setCurrentTab] = useState(0);
  const [rotateTo180, setRotateTo180] = useState(false);
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
    setRotateTo180(true);
    setTimeout(() => {
      setCurrentTab(tab);
      setRotateTo180(false);
    }, 1000); // Adjust this timeout to match the rotation duration
    requestAnimationFrame(animate);
  }, [tab]);
  return (
    <Canvas style={{ height: !isDesktop ? `100%` : '500px', width: !isDesktop ? `100%` : '500px' }} camera={{ position: [0, 0, 10], fov: 15 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 25, 45]} />
      <SpinningModel
        modelPath={path}
        currentTab={tab}
        rotateTo180={rotateTo180}
      />
      <OrbitControls enableZoom={false} maxAzimuthAngle={Math.PI / 4} minAzimuthAngle={-Math.PI / 4} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2} />
     
    </Canvas>
  );
};

export default Medal3D;