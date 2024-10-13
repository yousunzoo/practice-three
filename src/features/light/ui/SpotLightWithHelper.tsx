import { useHelper } from '@react-three/drei';
import { SpotLightProps } from '@react-three/fiber';
import { useRef } from 'react';
import { SpotLight, SpotLightHelper } from 'three';

type Props = SpotLightProps & { 
  helperSize:number;
  helperColor:string
 } 

export const SpotLightWithHelper= ({
  color,
  intensity,
  position,
  helperSize,
  helperColor,
}:Props) => {
  const lightRef = useRef<SpotLight>(null);

  // @ts-expect-error
  useHelper(lightRef, SpotLightHelper, helperSize, helperColor);

  return (
    <spotLight
      // @ts-expect-error
      ref={lightRef}
      color={color}
      intensity={intensity}
      position={position}
      penumbra={1}
      castShadow={true}
    />
  );
};
