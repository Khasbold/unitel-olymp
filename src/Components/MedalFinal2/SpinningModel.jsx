import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const SpinningModel = ({ modelPath }) => {
  const modelRef = useRef();
  const [positionZ, setPositionZ] = useState(0); // Start position behind the camera
  const [rotationY, setRotationY] = useState(0); // Start rotation
  const [isStopped, setIsStopped] = useState(false);

  // Load the 3D model
  const { scene } = useGLTF(modelPath);

  // Animate the model
  useFrame(() => {
    if (modelRef.current && !isStopped) {
      // Move the model forward
      if (positionZ < 0) { // Change 0 to the desired stop position
        setPositionZ(positionZ + 0.1); // Change 0.1 to the desired speed
        setRotationY(rotationY + Math.PI / 180); // Adjust the rotation speed if needed
      } else {
        setIsStopped(true);
      }
      
      modelRef.current.position.z = positionZ;
      modelRef.current.rotation.y = rotationY;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

export default SpinningModel;