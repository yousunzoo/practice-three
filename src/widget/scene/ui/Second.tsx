import { Floor } from "@/src/entities/basic";
import { DirectionalLightWithHelper } from "@/src/features/light";
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
    <Canvas  camera={{ near: 1, far: 100, position: [7, 7, 0] }} style={{width:'100%', height:'800px'}} shadows='variance'>
        <BackgroundColor />
        {/* <ambientLight color={0xffffff} intensity={1} castShadow /> */}

        <DirectionalLightWithHelper color="0xffffff" intensity={2} position={[2,3,1]} helperColor="blue" helperSize={1} />

        {/* <PointLightWithHelper color='0xffffff' helperColor="green" position={[1.2,1.2,3]} intensity={10} helperSize={0.4} /> */}


        {/* <SpotLightWithHelper color={0xffffff} position={[0,5,0]} intensity={10} helperSize={1} helperColor={'green'} /> */}
        
        {/* <hemisphereLight groundColor={'#00ff00'} color={'#ffbbbb'} /> */}

        {/* <AreaLightWithHelper brightness={10} color={"white"} /> */}

        <Fruit />

        <Floor />

        {/* <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} /> */}

        <OrbitControls />
    </Canvas>
  )
}
