import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useDrag } from '@use-gesture/react';
import styles from '../pages/Shagun.module.css';

const DraggableDolphin = () => {
  const obj = useLoader(OBJLoader, '/dolphin.obj'); // Path to your OBJ model
  const ref = useRef();
  const [position, setPosition] = React.useState([0, 0, 0]);

  const bind = useDrag(({ offset: [x, y] }) => {
    setPosition([x / 100, -y / 100, 0]);
  });

  return (
    <mesh ref={ref} position={position} {...bind()}>
      <primitive object={obj} scale={0.2} /> {/* Smaller scale */}
    </mesh>
  );
};

const DolphinScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className={styles.shagunCanvas}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Suspense fallback={null}>
        <DraggableDolphin />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default DolphinScene;