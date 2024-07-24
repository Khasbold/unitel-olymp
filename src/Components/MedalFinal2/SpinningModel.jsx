// src/SpinningModel.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const SpinningModel = ({ modelPath }) => {
  const modelRef = useRef();
  const [positionZ, setPositionZ] = useState(0); // Start position behind the camera
  const [rotationY, setRotationY] = useState(0); // Start rotation
  const [stage, setStage] = useState(0); // Track the stages of the animation
  let { scene } = useGLTF(modelPath);
  // Animate the model
  useFrame(() => {
    if (modelRef.current) {
      // Move the model forward
      switch (stage) {
        case 0: // Rotate to -45 degrees
          if (rotationY > -Math.PI / 4) {
            setRotationY(rotationY - Math.PI / 180); // Rotate left
          } else {
            setStage(1);
          }
          break;
        case 1: // Rotate to +45 degrees
          if (rotationY < Math.PI / 4) {
            setRotationY(rotationY + Math.PI / 180); // Rotate right
          } else {
            setStage(2);
          }
          break;
        case 2: // Rotate back to 0 degrees
          if (rotationY > 0) {
            setRotationY(rotationY - Math.PI / 180); // Rotate left
          } else {
            setRotationY(0); // Ensure it's exactly 0
            setStage(3);
          }
          break;
        default:
          break;
      }
      // Rotate the model based on the current stage
      modelRef.current.position.z = positionZ;
      modelRef.current.rotation.y = rotationY;
    }
  });
  return scene ? <primitive ref={modelRef} object={scene} /> : <></>;
};

export default SpinningModel;