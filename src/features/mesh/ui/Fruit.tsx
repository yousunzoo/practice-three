import * as THREE from 'three';

export const Fruit = () => {
  return (
    <group position={[0,1.7,0]} rotation={[0, Math.PI / 2, 0]}>
      {/* Bottom part of tangerine */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <dodecahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color={0xffb84c} />
      </mesh>

      {/* Top part of tangerine */}
      <mesh position={[0, 1.7, 0]}>
        <tetrahedronGeometry args={[0.8, 3]} />
        <meshStandardMaterial color={0xffb84c} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 2.4, 0]}>
        <tetrahedronGeometry args={[0.2, 4]} />
        <meshStandardMaterial color={0x6ca06e} side={THREE.DoubleSide} />
      </mesh>

      {/* Leaf */}
      <mesh position={[0, 2.4, -0.5]} rotation={[-1.2, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 16, 0.5, 1.5]} />
        <meshStandardMaterial color={0x6ca06e} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
