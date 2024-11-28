import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { Model } from './Model';

export const Scene = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 75 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
      <Grid
        args={[10, 10]}
        cellSize={1}
        cellThickness={1}
        cellColor="#6e6e6e"
        sectionSize={3}
        sectionThickness={1.5}
        sectionColor="#9d4b4b"
        fadeDistance={30}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={true}
      />
      <OrbitControls />
    </Canvas>
  );
};