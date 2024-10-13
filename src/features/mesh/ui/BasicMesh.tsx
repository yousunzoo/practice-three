import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";


type BoxProps = ThreeElements["mesh"];

export const BasicMesh = (props:BoxProps) => {
  const meshRef = useRef<Mesh>(null!);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {

    if(!meshRef.current) return;
    
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });


  return (
    <mesh
    {...props}
    // @ts-ignore
    ref={meshRef}
    scale={clicked ? 1.5 : 1}
    onClick={() => setClick(!clicked)}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      {/* 큐브 생성 - args={[width, height, depth]} */}
    <boxGeometry args={[3, 3, 3]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
  )
}
