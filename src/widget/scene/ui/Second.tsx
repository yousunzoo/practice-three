import { Fruit } from "@/src/features/mesh";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from 'three';

const BackgroundColor = () => {
    const {scene} = useThree();

    useEffect(()=>{ 
      // @ts-expect-error
      scene.background = new THREE.Color(0xffe287)
    },[scene])

    return null;
}
export const Second = () => {

  return (
    <Canvas camera={{position:[1,1,10]}} style={{width:'100%', height:'800px'}}>
        <BackgroundColor />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />


        <Fruit />

        {/* <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} /> */}

        <OrbitControls />
    </Canvas>
  )
}
