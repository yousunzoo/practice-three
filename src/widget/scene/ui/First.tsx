"use client";

import { BasicMesh } from "@/src/features/mesh";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export const First = () => {


  return (
    <Canvas camera={{position:[1,1,10]}}>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

    <BasicMesh position={[0,0,1]} />


    <gridHelper args={[10, 10]} />
    <axesHelper args={[8]} />

    <OrbitControls />
  </Canvas>

    
  );
}